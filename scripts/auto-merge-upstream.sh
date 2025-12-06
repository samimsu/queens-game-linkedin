#!/bin/bash
# Auto-merge upstream changes
# Merge drivers in .gitattributes handle known conflicts (levels.ts, README.md, package.json)
# This script orchestrates the merge and verifies the build

set -eo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Ensure upstream remote exists
if ! git remote | grep -q upstream; then
    echo "Adding upstream remote..."
    git remote add upstream https://github.com/samimsu/queens-game-linkedin.git
fi

echo "Fetching upstream..."
git fetch upstream

# Check if we're already up to date
if git merge-base --is-ancestor upstream/main HEAD; then
    echo -e "${GREEN}✅ Already up to date with upstream${NC}"
    exit 0
fi

# Show what we're merging
echo ""
echo "Commits to merge:"
git log HEAD..upstream/main --oneline
echo ""

# Count new levels for reporting
NEW_LEVELS=$(git diff --name-only HEAD upstream/main | grep -c "src/utils/levels/level[0-9]*.ts" || true)
echo "New level files: $NEW_LEVELS"

# Attempt merge - drivers in .gitattributes handle known conflicts
echo ""
echo "Merging upstream/main..."
if git merge upstream/main --no-edit; then
    echo -e "${GREEN}✅ Merge successful${NC}"
else
    # Merge failed - check if we can resolve remaining conflicts
    echo -e "${YELLOW}Merge conflicts detected, attempting resolution...${NC}"

    # Check what's still conflicted
    CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || true)

    if [ -z "$CONFLICTS" ]; then
        echo "No conflicts remain - merge driver handled them"
    else
        echo "Remaining conflicts:"
        echo "$CONFLICTS"

        # Try to resolve known conflicts (fallback for local dev without drivers)
        for file in $CONFLICTS; do
            case "$file" in
                src/utils/levels.ts|README.md|package.json|package-lock.json)
                    echo "  Resolving $file (keeping ours)..."
                    git checkout --ours "$file"
                    git add "$file"
                    ;;
                src/utils/bonusLevels.ts|.all-contributorsrc|src/i18n/*)
                    echo "  Resolving $file (taking theirs)..."
                    git checkout --theirs "$file"
                    git add "$file"
                    ;;
                *)
                    echo -e "${RED}  Unknown conflict: $file - manual resolution needed${NC}"
                    exit 1
                    ;;
            esac
        done

        # Verify all conflicts resolved
        REMAINING=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        if [ -n "$REMAINING" ]; then
            echo -e "${RED}Unresolved conflicts remain:${NC}"
            echo "$REMAINING"
            exit 1
        fi

        # Commit the resolved merge
        git commit --no-edit
    fi
fi

# Build verification
echo ""
echo "Running build test..."
if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    tail -30 /tmp/build.log
    exit 1
fi

# Summary
echo ""
echo -e "${GREEN}✅ Merge complete!${NC}"
echo "New levels: $NEW_LEVELS"
echo ""
echo "Push with: git push origin main"
