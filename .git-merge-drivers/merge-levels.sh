#!/bin/bash
# Custom merge driver for src/utils/levels.ts
# Always keeps our Vite glob imports version
# Usage: merge-levels.sh %O %A %B %P

BASE=$1
OURS=$2
THEIRS=$3
MARKER_SIZE=$4

# Always keep our glob imports version
cp "$OURS" "$OURS.merged"

# Check if the file contains our glob import pattern
if grep -q "import.meta.glob" "$OURS"; then
    # We have glob imports - keep our version
    exit 0
else
    # Shouldn't happen, but fallback to standard merge
    exit 1
fi
