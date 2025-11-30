#!/bin/bash
# Automatic upstream merge script
# Handles recurring conflicts with levels.ts and README.md
# Ensures all new level files are properly included

# Exit on error, but handle merge conflicts gracefully
set -eo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Fetching upstream...${NC}"
git fetch upstream

# Check if there are commits to merge
if git merge-base --is-ancestor upstream/main HEAD; then
    echo -e "${GREEN}✅ Already up to date with upstream${NC}"
    exit 0
fi

# Show what will be merged
echo -e "${BLUE}📦 New commits from upstream:${NC}"
git log HEAD..upstream/main --oneline

# Count new level files that will be added
NEW_LEVELS=$(git diff --name-only HEAD upstream/main | grep -c "src/utils/levels/level[0-9]*.ts" || true)
echo -e "${BLUE}📊 New level files to add: ${NEW_LEVELS}${NC}"

# Attempt the merge
echo ""
echo -e "${BLUE}🔀 Attempting merge...${NC}"
if git merge upstream/main --no-edit 2>&1; then
    echo -e "${GREEN}✅ Auto-merge successful!${NC}"

    # Verify new levels were included
    ADDED_LEVELS=$(git diff --name-only HEAD~1 HEAD | grep -c "src/utils/levels/level[0-9]*.ts" || true)
    echo -e "${GREEN}   Added ${ADDED_LEVELS} new level files${NC}"
    exit 0
fi

# Merge failed - auto-resolve known conflicts
echo -e "${YELLOW}⚠️  Conflicts detected - auto-resolving...${NC}"

# Show current merge status
echo -e "${BLUE}Current merge status:${NC}"
git status --short | head -20

# Store the merge head for later
MERGE_HEAD=$(git rev-parse MERGE_HEAD)
echo -e "${BLUE}Merging from: ${MERGE_HEAD:0:7}${NC}"

# === CRITICAL: Ensure all new files are staged ===
echo ""
echo -e "${BLUE}📥 Staging new files from upstream...${NC}"

# Stage all new level files explicitly
git diff --name-only --diff-filter=A HEAD MERGE_HEAD | grep "src/utils/levels/level[0-9]*.ts" | while read -r file; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}   ✓ Staging new level: $file${NC}"
        git add "$file"
    else
        echo -e "${YELLOW}   ⚠ File not found, checking out: $file${NC}"
        git checkout MERGE_HEAD -- "$file"
        git add "$file"
    fi
done

# Stage all modified level files from upstream (keeping their version)
git diff --name-only --diff-filter=M HEAD MERGE_HEAD | grep "src/utils/levels/level[0-9]*.ts" | while read -r file; do
    echo -e "${BLUE}   → Updating existing level: $file${NC}"
    git checkout MERGE_HEAD -- "$file"
    git add "$file"
done

# Stage all new bonus level files
git diff --name-only --diff-filter=A HEAD MERGE_HEAD | grep "src/utils/bonus-levels/" | while read -r file; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}   ✓ Staging new bonus level: $file${NC}"
        git add "$file"
    else
        git checkout MERGE_HEAD -- "$file"
        git add "$file"
    fi
done

# Stage any other non-conflicting new files
git diff --name-only --diff-filter=A HEAD MERGE_HEAD | grep -v "levels.ts\|README.md" | while read -r file; do
    if [ -f "$file" ]; then
        echo -e "${BLUE}   → Staging new file: $file${NC}"
        git add "$file"
    fi
done

# === Resolve known conflicts ===
echo ""
echo -e "${BLUE}🔧 Resolving conflicts...${NC}"

# 1. Resolve levels.ts - always keep our glob imports
if [ -f src/utils/levels.ts ] && git diff --name-only --diff-filter=U | grep -q "src/utils/levels.ts"; then
    echo -e "${GREEN}  📝 Resolving levels.ts (keeping glob imports)...${NC}"
    cat > src/utils/levels.ts <<'EOF'
import { type Level } from "./types";

// Use Vite's glob import to automatically discover all level files
// This eliminates the need to manually update this file when adding new levels
const levelModules = import.meta.glob<{ default: Level }>(
  "./levels/level[0-9]*.ts",
  { eager: true }
);

export const levels: { [key: string]: Level } = {};

for (const [path, module] of Object.entries(levelModules)) {
  const match = path.match(/level(\d+)\.ts$/);
  if (match) {
    const levelName = `level${match[1]}`;
    levels[levelName] = module.default;
  }
}
EOF
    git add src/utils/levels.ts
fi

# 2. Resolve README.md - remove hardcoded level counts
if [ -f README.md ] && git diff --name-only --diff-filter=U | grep -q "README.md"; then
    echo -e "${GREEN}  📝 Resolving README.md (removing level count)...${NC}"

    # Take our version first
    git show HEAD:README.md > README.md.tmp

    # Remove any "Levels Added" section
    sed '/^## Levels Added ([0-9]*\/[0-9]*)/,/^$/d' README.md.tmp > README.md
    rm README.md.tmp

    git add README.md
fi

# 3. Auto-resolve other common conflicts
for conflict_file in src/utils/bonusLevels.ts .all-contributorsrc; do
    if [ -f "$conflict_file" ] && git diff --name-only --diff-filter=U | grep -q "$conflict_file"; then
        echo -e "${BLUE}  → Resolving $conflict_file (taking upstream version)...${NC}"
        git checkout MERGE_HEAD -- "$conflict_file"
        git add "$conflict_file"
    fi
done

# Check if all conflicts are resolved
echo ""
if git diff --name-only --diff-filter=U | grep -q .; then
    echo -e "${RED}❌ Some conflicts remain unresolved:${NC}"
    git diff --name-only --diff-filter=U
    echo ""
    echo -e "${YELLOW}Manual resolution required. Run:${NC}"
    echo "  git status"
    echo "  # resolve conflicts"
    echo "  git add <files>"
    echo "  git commit"
    exit 1
fi

# === Verification ===
echo -e "${BLUE}🔍 Verifying staged changes...${NC}"

# Count staged level files
STAGED_LEVELS=$(git diff --cached --name-only | grep -c "src/utils/levels/level[0-9]*.ts" || true)
echo -e "${GREEN}   Staged level files: ${STAGED_LEVELS}${NC}"

# List new levels being added
if [ "$STAGED_LEVELS" -gt 0 ]; then
    echo -e "${BLUE}   New levels:${NC}"
    git diff --cached --name-only | grep "src/utils/levels/level[0-9]*.ts" | sed 's/.*\/level\([0-9]*\)\.ts$/     - Level \1/'
fi

# Run build test
echo ""
echo -e "${BLUE}🏗️  Testing build...${NC}"
if npm run build > /tmp/build.log 2>&1; then
    # Count transformed modules
    MODULES=$(grep "modules transformed" /tmp/build.log | grep -o "[0-9]* modules" | grep -o "[0-9]*")
    echo -e "${GREEN}✅ Build successful (${MODULES} modules)${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    echo "Build log:"
    tail -50 /tmp/build.log
    exit 1
fi

# === Commit the merge ===
UPSTREAM_COMMITS=$(git log HEAD..MERGE_HEAD --oneline | wc -l)
LATEST_COMMIT=$(git log MERGE_HEAD --oneline -1 | cut -d' ' -f2-)
NEW_LEVEL_FILES=$(git diff --cached --name-only | grep "src/utils/levels/level[0-9]*.ts" | wc -l)

# Extract level numbers for commit message
LEVEL_NUMBERS=$(git diff --cached --name-only | grep "src/utils/levels/level[0-9]*.ts" | sed 's/.*\/level\([0-9]*\)\.ts$/\1/' | sort -n | paste -sd "," -)

echo ""
echo -e "${BLUE}📝 Committing merge...${NC}"

COMMIT_MSG="Merge upstream: $LATEST_COMMIT

Auto-resolved conflicts:
- levels.ts: Kept Vite glob imports
- README.md: Removed hardcoded level count

New content:
- Added ${NEW_LEVEL_FILES} level file(s)"

if [ -n "$LEVEL_NUMBERS" ]; then
    COMMIT_MSG="${COMMIT_MSG} (levels: ${LEVEL_NUMBERS})"
fi

COMMIT_MSG="${COMMIT_MSG}

Merged ${UPSTREAM_COMMITS} commit(s) from upstream/main
Build verified: ${MODULES} modules transformed"

git commit -m "$COMMIT_MSG"

echo ""
echo -e "${GREEN}✅ Auto-merge complete!${NC}"
echo -e "${GREEN}   New commits merged: ${UPSTREAM_COMMITS}${NC}"
echo -e "${GREEN}   New level files: ${NEW_LEVEL_FILES}${NC}"
if [ -n "$LEVEL_NUMBERS" ]; then
    echo -e "${GREEN}   Levels added: ${LEVEL_NUMBERS}${NC}"
fi
echo -e "${GREEN}   Latest: ${LATEST_COMMIT}${NC}"
echo ""
echo -e "${BLUE}Push with: git push${NC}"
