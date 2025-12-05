# Automatic Upstream Merge System

This repository includes an automated system for merging upstream commits without manual conflict resolution.

## The Problem

When syncing with upstream (samimsu/queens-game-linkedin), two files consistently conflict:

1. **`src/utils/levels.ts`**
   - Upstream: 1,100+ line manual import file
   - Our fork: 18-line Vite glob imports
   - **Why it conflicts**: Completely different approaches to the same file

2. **`README.md`**
   - Upstream: Hardcoded "Levels Added (X/Y)" section
   - Our fork: Generic description without counts
   - **Why it conflicts**: Upstream updates the count with each level

## The Solution

### 1. Custom Merge Drivers (.gitattributes)

```gitattributes
src/utils/levels.ts merge=ours-levels
README.md merge=clean-readme
```

**Important:** These drivers are automatically configured in the GitHub Actions workflow:
```yaml
git config merge.ours-levels.driver "true"  # Always keep ours
git config merge.clean-readme.driver "true" # Always keep ours
```

For local development, the merge script handles conflicts directly without relying on these drivers.

### 2. Automated Merge Script

**Location**: `scripts/auto-merge-upstream.sh`

**Usage**:
```bash
./scripts/auto-merge-upstream.sh
```

**What it does**:
1. Fetches upstream
2. Attempts automatic merge
3. If conflicts occur:
   - Resolves `levels.ts` by keeping our glob imports
   - Resolves `README.md` by removing level count section
4. Tests build
5. Creates merge commit
6. Ready to push

### 3. GitHub Actions Automation

**Workflow**: `.github/workflows/auto-merge-upstream.yml`

**Schedule**: Daily at 2 PM UTC

**What it does**:
1. Checks out the `main` branch with full history
2. Configures custom merge drivers for conflict-free files
3. Fetches upstream and detects new commits
4. Runs the auto-merge script
5. Verifies build passes
6. Pushes changes if successful
7. Creates detailed summary of merged commits and new levels

## Manual Usage

### Quick Merge
```bash
./scripts/auto-merge-upstream.sh
git push
```

### Verify Before Push
```bash
./scripts/auto-merge-upstream.sh
npm run build  # Additional verification
git log -1     # Review merge commit
git push
```

### Troubleshoot Failed Merge
```bash
# If script fails, check remaining conflicts
git status

# View conflict details
git diff

# Abort and retry
git merge --abort
./scripts/auto-merge-upstream.sh
```

## Why This Works

### Glob Imports Advantage

**Upstream approach** (causes conflicts):
```typescript
import level572 from "./levels/level572"; // ← Modifies line 564
// ... needs 1,100+ lines
export const levels = { level572, /* ... */ }; // ← Modifies line 1129
```

**Our approach** (zero conflicts):
```typescript
const levelModules = import.meta.glob<{ default: Level }>(
  "./levels/level[0-9]*.ts",
  { eager: true }
);
// Automatically discovers all level files - no modifications needed
```

### README.md Strategy

Upstream's hardcoded counts create unnecessary conflicts. Our generic description:
- Never conflicts when they add levels
- More maintainable (no manual updates)
- Still accurate (says "500+ levels" instead of exact count)

## Architecture Benefits

1. **Zero Manual Intervention**: Merges happen automatically
2. **Build Safety**: Script tests build before committing
3. **Audit Trail**: Clear commit messages explain what was merged
4. **Reversible**: Standard git workflow, easy to undo if needed
5. **Scalable**: Works regardless of how many levels upstream adds

## Future Improvements

### Option 1: Contribute Glob Imports to Upstream
Submit PR to upstream suggesting the glob imports approach. Benefits:
- Eliminates conflicts for everyone
- Cleaner codebase
- Easier maintenance

### Option 2: Enhanced Automation
- Automatic PR creation after merge
- Notification on merge failures
- Integration tests before auto-push

### Option 3: Smart Conflict Detection
- Detect new conflict patterns
- Auto-update merge strategies
- Self-healing merge system

## Maintenance

### Update Merge Logic
If upstream changes file structure, update:
- `scripts/auto-merge-upstream.sh` - Main merge logic and conflict resolution
- `.github/workflows/auto-merge-upstream.yml` - Workflow configuration

### Monitor Automation
Check GitHub Actions runs:
```
https://github.com/trexwe/queens-game-linkedin/actions
```

Look for "Auto-merge Upstream" workflow failures.

## Technical Details

### Merge Strategy

Uses a combination of:
1. **Git attributes**: Define per-file merge strategies
2. **Custom drivers**: Handle specific conflict patterns
3. **Fallback script**: Comprehensive conflict resolution

### Safety Measures

- ✅ Build verification before commit
- ✅ No force push (preserves history)
- ✅ Clear commit messages (easy to track)
- ✅ Manual trigger available (workflow_dispatch)

### Limitations

- Only handles known conflict patterns (levels.ts, README.md)
- New conflict types require script updates
- Assumes glob imports remain in place

## Troubleshooting

### "Build failed" Error
```bash
# Check what broke
npm run build

# Review merged files
git diff HEAD~1

# Fix and amend
# ... make fixes ...
git add .
git commit --amend
```

### "Unresolved conflicts" Error
```bash
# View remaining conflicts
git status
git diff --name-only --diff-filter=U

# Manually resolve
git add <resolved-files>
git commit
```

### Automation Not Running
1. Check GitHub Actions is enabled
2. Verify upstream remote exists
3. Check workflow file syntax

## Summary

This auto-merge system transforms a repetitive, conflict-prone process into a fully automated workflow. By understanding the root cause of conflicts (architectural differences) and implementing targeted solutions (merge drivers + automation), we achieve **zero-touch upstream synchronization**.

**Result**: Never manually resolve the same conflicts again.
