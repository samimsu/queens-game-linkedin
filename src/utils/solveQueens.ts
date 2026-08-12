function findCoordsForColor(
    color: string,
    board: string[][],
): { row: number; col: number }[] {
  const result: { row: number; col: number }[] = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === color) {
        result.push({ row, col });
      }
    }
  }
  return result;
}

export async function getSolutions(
  board: string[][],
  onSolutionFound?: (solution: number[][]) => Promise<boolean>
) {
  const N = board.length;
  const solutions = [];
  const labels = Array.from({ length: N }, (_, i) =>
      String.fromCharCode("A".charCodeAt(0) + i),
  );

  // Build region coords and sort by size (MRV: smallest regions first)
  const regionCells = new Map<string, { row: number; col: number }[]>();
  for (const label of labels) {
    regionCells.set(label, findCoordsForColor(label, board));
  }
  const sortedRegions = [...labels].sort(
    (a, b) => regionCells.get(a)!.length - regionCells.get(b)!.length,
  );

  const usedRows = new Set<number>();
  const usedCols = new Set<number>();
  const queenPositions: [number, number][] = [];

  function isSafe(row: number, col: number): boolean {
    if (usedRows.has(row) || usedCols.has(col)) return false;

    // Check diagonal adjacency (one step only)
    for (const [qr, qc] of queenPositions) {
      if (Math.abs(qr - row) === 1 && Math.abs(qc - col) === 1) {
        return false;
      }
    }

    return true;
  }

  async function backtrack(regionIdx: number): Promise<boolean> {
    if (regionIdx === sortedRegions.length) {
      const solution = queenPositions.map(([r, c]) => [r, c]);
      solution.sort((a, b) => a[0] - b[0]);
      solutions.push(solution);
      if (onSolutionFound) {
        const shouldStop = await onSolutionFound(solution);
        if (shouldStop) return true;
      }
      return false;
    }

    const region = sortedRegions[regionIdx];
    const cells = regionCells.get(region)!;

    for (const { row, col } of cells) {
      if (isSafe(row, col)) {
        usedRows.add(row);
        usedCols.add(col);
        queenPositions.push([row, col]);

        const shouldStop = await backtrack(regionIdx + 1);
        if (shouldStop) return true;

        queenPositions.pop();
        usedRows.delete(row);
        usedCols.delete(col);
      }
    }
    return false;
  }

  await backtrack(0);
  return solutions;
}