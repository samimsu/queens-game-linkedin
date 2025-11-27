#!/bin/bash
# Custom merge driver for README.md
# Automatically removes the "Levels Added (X/Y)" section from upstream
# Usage: merge-readme.sh %O %A %B %P

BASE=$1
OURS=$2
THEIRS=$3
MARKER_SIZE=$4

# Start with our version
cp "$OURS" "$OURS.tmp"

# Remove any "Levels Added" section that might have snuck in
sed -i '/## Levels Added ([0-9]*\/[0-9]*)/,/^$/d' "$OURS.tmp"

# Perform a standard merge on the cleaned file
git merge-file -L "ours" -L "base" -L "theirs" "$OURS.tmp" "$BASE" "$THEIRS"
merge_result=$?

# Copy result back
cp "$OURS.tmp" "$OURS"
rm "$OURS.tmp"

exit $merge_result
