#!/bin/bash
# Automatic upstream merge script
# Handles the recurring conflicts with levels.ts and README.md

set -e

echo "🔄 Fetching upstream..."
git fetch upstream

# Check if there are commits to merge
if git merge-base --is-ancestor upstream/main HEAD; then
    echo "✅ Already up to date with upstream"
    exit 0
fi

# Show what will be merged
echo "📦 New commits from upstream:"
git log HEAD..upstream/main --oneline

# Attempt the merge
echo ""
echo "🔀 Attempting merge..."
if git merge upstream/main --no-edit 2>&1; then
    echo "✅ Auto-merge successful!"
    exit 0
fi

# Merge failed - auto-resolve known conflicts
echo "⚠️  Conflicts detected - auto-resolving..."

# 1. Resolve levels.ts - always keep our glob imports
if [ -f src/utils/levels.ts ] && git diff --name-only --diff-filter=U | grep -q "src/utils/levels.ts"; then
    echo "  📝 Resolving levels.ts (keeping glob imports)..."
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
    echo "  📝 Resolving README.md (removing level count)..."

    # Take our version first
    git show HEAD:README.md > README.md

    # Remove any "Levels Added" section
    sed -i '/^## Levels Added ([0-9]*\/[0-9]*)/,/^$/d' README.md

    git add README.md
fi

# Check if all conflicts are resolved
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "❌ Some conflicts remain unresolved:"
    git diff --name-only --diff-filter=U
    exit 1
fi

# Run build test
echo ""
echo "🏗️  Testing build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Commit the merge
UPSTREAM_COMMITS=$(git log HEAD..MERGE_HEAD --oneline | wc -l)
LATEST_COMMIT=$(git log MERGE_HEAD --oneline -1 | cut -d' ' -f2-)

echo ""
echo "📝 Committing merge..."
git commit -m "Merge upstream: $LATEST_COMMIT

Auto-resolved conflicts:
- levels.ts: Kept Vite glob imports
- README.md: Removed hardcoded level count

Merged $UPSTREAM_COMMITS commit(s) from upstream/main"

echo ""
echo "✅ Auto-merge complete!"
echo "   New commits merged: $UPSTREAM_COMMITS"
echo "   Latest: $LATEST_COMMIT"
echo ""
echo "Push with: git push"
