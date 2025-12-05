#!/bin/bash
# Automatic upstream merge script
# Handles recurring conflicts with levels.ts and README.md
# Works in fresh-clone scenarios (GitHub Actions)

set -eo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Fetching upstream...${NC}"

# Ensure upstream remote exists
if ! git remote | grep -q upstream; then
    git remote add upstream https://github.com/samimsu/queens-game-linkedin.git
fi

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

# Store upstream HEAD for reference
UPSTREAM_HEAD=$(git rev-parse upstream/main)
echo -e "${BLUE}Upstream HEAD: ${UPSTREAM_HEAD:0:7}${NC}"

# === Strategy: Cherry-pick new level files first, then merge ===
echo ""
echo -e "${BLUE}📥 Collecting new files from upstream...${NC}"

# Get list of new level files
NEW_LEVEL_FILES=$(git diff --name-only HEAD upstream/main | grep "src/utils/levels/level[0-9]*.ts" || true)
NEW_BONUS_FILES=$(git diff --name-only HEAD upstream/main | grep "src/utils/bonus-levels/" || true)
NEW_COMMUNITY_FILES=$(git diff --name-only HEAD upstream/main | grep "src/utils/community-levels/" || true)

# Attempt the merge with our custom strategy
echo ""
echo -e "${BLUE}🔀 Attempting merge...${NC}"

# Try merge - it may fail due to conflicts
MERGE_FAILED=false
if ! git merge upstream/main --no-edit 2>&1; then
    MERGE_FAILED=true
    echo -e "${YELLOW}⚠️  Merge conflicts detected - auto-resolving...${NC}"
fi

if [ "$MERGE_FAILED" = true ]; then
    # Show current merge status
    echo -e "${BLUE}Current merge status:${NC}"
    git status --short | head -20

    # Check if we're actually in a merge state
    if ! git rev-parse MERGE_HEAD >/dev/null 2>&1; then
        echo -e "${RED}❌ Not in merge state - something went wrong${NC}"
        exit 1
    fi

    MERGE_HEAD=$(git rev-parse MERGE_HEAD)
    echo -e "${BLUE}Merging from: ${MERGE_HEAD:0:7}${NC}"

    # === Stage all new files from upstream ===
    echo ""
    echo -e "${BLUE}📥 Staging new files from upstream...${NC}"

    # Stage new level files
    for file in $NEW_LEVEL_FILES; do
        if [ -n "$file" ]; then
            echo -e "${GREEN}   ✓ Adding level: $file${NC}"
            git checkout MERGE_HEAD -- "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        fi
    done

    # Stage new bonus level files
    for file in $NEW_BONUS_FILES; do
        if [ -n "$file" ]; then
            echo -e "${GREEN}   ✓ Adding bonus level: $file${NC}"
            git checkout MERGE_HEAD -- "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        fi
    done

    # Stage new community level files
    for file in $NEW_COMMUNITY_FILES; do
        if [ -n "$file" ]; then
            echo -e "${GREEN}   ✓ Adding community level: $file${NC}"
            git checkout MERGE_HEAD -- "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        fi
    done

    # === Resolve known conflicts ===
    echo ""
    echo -e "${BLUE}🔧 Resolving known conflicts...${NC}"

    # 1. Resolve levels.ts - always keep our glob imports
    if git diff --name-only --diff-filter=U 2>/dev/null | grep -q "src/utils/levels.ts"; then
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

    # 2. Resolve README.md - keep our version (no hardcoded counts)
    if git diff --name-only --diff-filter=U 2>/dev/null | grep -q "README.md"; then
        echo -e "${GREEN}  📝 Resolving README.md (keeping our version)...${NC}"
        git checkout --ours README.md
        git add README.md
    fi

    # 3. Auto-resolve other common conflicts by taking upstream version
    for conflict_file in src/utils/bonusLevels.ts .all-contributorsrc package.json package-lock.json; do
        if git diff --name-only --diff-filter=U 2>/dev/null | grep -q "^${conflict_file}$"; then
            echo -e "${BLUE}  → Resolving $conflict_file (taking upstream version)...${NC}"
            git checkout MERGE_HEAD -- "$conflict_file" 2>/dev/null || git checkout --theirs "$conflict_file" 2>/dev/null || true
            git add "$conflict_file" 2>/dev/null || true
        fi
    done

    # Check if all conflicts are resolved
    echo ""
    REMAINING=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
    if [ -n "$REMAINING" ]; then
        echo -e "${RED}❌ Some conflicts remain unresolved:${NC}"
        echo "$REMAINING"
        echo ""
        echo -e "${YELLOW}Manual resolution required. Run:${NC}"
        echo "  git status"
        echo "  # resolve conflicts"
        echo "  git add <files>"
        echo "  git commit"
        exit 1
    fi
fi

# === Verification ===
echo -e "${BLUE}🔍 Verifying staged changes...${NC}"

# Count staged level files
STAGED_LEVELS=$(git diff --cached --name-only 2>/dev/null | grep -c "src/utils/levels/level[0-9]*.ts" || true)
echo -e "${GREEN}   Staged level files: ${STAGED_LEVELS}${NC}"

# List new levels being added
if [ "$STAGED_LEVELS" -gt 0 ]; then
    echo -e "${BLUE}   New levels:${NC}"
    git diff --cached --name-only | grep "src/utils/levels/level[0-9]*.ts" | sed 's/.*\/level\([0-9]*\)\.ts$/     - Level \1/' || true
fi

# Run build test
echo ""
echo -e "${BLUE}🏗️  Testing build...${NC}"
if npm run build > /tmp/build.log 2>&1; then
    # Count transformed modules
    MODULES=$(grep "modules transformed" /tmp/build.log | grep -o "[0-9]* modules" | grep -o "[0-9]*" || echo "?")
    echo -e "${GREEN}✅ Build successful (${MODULES} modules)${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    echo "Build log:"
    tail -50 /tmp/build.log
    exit 1
fi

# === Commit the merge (only if we had conflicts) ===
if [ "$MERGE_FAILED" = true ]; then
    UPSTREAM_COMMITS=$(git log HEAD..MERGE_HEAD --oneline 2>/dev/null | wc -l || echo "?")
    LATEST_COMMIT=$(git log MERGE_HEAD --oneline -1 2>/dev/null | cut -d' ' -f2- || echo "upstream changes")
    NEW_LEVEL_COUNT=$(git diff --cached --name-only | grep -c "src/utils/levels/level[0-9]*.ts" || echo "0")

    # Extract level numbers for commit message
    LEVEL_NUMBERS=$(git diff --cached --name-only | grep "src/utils/levels/level[0-9]*.ts" | sed 's/.*\/level\([0-9]*\)\.ts$/\1/' | sort -n | paste -sd "," - || true)

    echo ""
    echo -e "${BLUE}📝 Committing merge...${NC}"

    COMMIT_MSG="Merge upstream: $LATEST_COMMIT

Auto-resolved conflicts:
- levels.ts: Kept Vite glob imports
- README.md: Kept our version (no hardcoded counts)

New content:
- Added ${NEW_LEVEL_COUNT} level file(s)"

    if [ -n "$LEVEL_NUMBERS" ]; then
        COMMIT_MSG="${COMMIT_MSG} (levels: ${LEVEL_NUMBERS})"
    fi

    COMMIT_MSG="${COMMIT_MSG}

Merged ${UPSTREAM_COMMITS} commit(s) from upstream/main
Build verified: ${MODULES} modules transformed"

    git commit -m "$COMMIT_MSG"
else
    # Merge succeeded without conflicts
    NEW_LEVEL_COUNT=$(git diff --name-only HEAD~1 HEAD | grep -c "src/utils/levels/level[0-9]*.ts" || echo "0")
    LEVEL_NUMBERS=$(git diff --name-only HEAD~1 HEAD | grep "src/utils/levels/level[0-9]*.ts" | sed 's/.*\/level\([0-9]*\)\.ts$/\1/' | sort -n | paste -sd "," - || true)
fi

echo ""
echo -e "${GREEN}✅ Auto-merge complete!${NC}"
echo -e "${GREEN}   New level files: ${NEW_LEVEL_COUNT:-$STAGED_LEVELS}${NC}"
if [ -n "$LEVEL_NUMBERS" ]; then
    echo -e "${GREEN}   Levels added: ${LEVEL_NUMBERS}${NC}"
fi
echo ""
echo -e "${BLUE}Push with: git push origin main${NC}"
