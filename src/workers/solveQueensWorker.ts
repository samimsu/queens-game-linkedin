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

function isSafe(
  row: number,
  col: number,
  usedRows: Set<number>,
  usedCols: Set<number>,
  queenPositions: [number, number][],
  N: number,
): boolean {
  if (usedRows.has(row) || usedCols.has(col)) return false;

  // Check diagonal adjacency (one step only)
  for (const [qr, qc] of queenPositions) {
    if (Math.abs(qr - row) === 1 && Math.abs(qc - col) === 1) {
      return false;
    }
  }

  return true;
}

// Since Web Workers don't have access to the main thread's imports, we define the logic inline
self.onmessage = async (e) => {
  const { board } = e.data;

  const N = board.length;
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

  async function getSolutions() {
    const solutions: number[][][] = [];
    let solutionCount = 0;

    const usedRows = new Set<number>();
    const usedCols = new Set<number>();
    const queenPositions: [number, number][] = [];

    async function backtrack(regionIdx: number): Promise<boolean> {
      if (regionIdx === sortedRegions.length) {
        const solution = queenPositions.map(([r, c]) => [r, c]);
        // Sort by row for consistent output
        solution.sort((a, b) => a[0] - b[0]);
        solutions.push(solution);
        solutionCount++;
        self.postMessage({ type: "solution", data: solution });
        await new Promise((resolve) => setTimeout(resolve, 10));
        if (solutionCount >= 100) {
          self.postMessage({ type: "done", data: solutions });
          self.close();
          return true;
        }
        return false;
      }

      const region = sortedRegions[regionIdx];
      const cells = regionCells.get(region)!;

      for (const { row, col } of cells) {
        if (isSafe(row, col, usedRows, usedCols, queenPositions, N)) {
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

  const solutions = await getSolutions();
  self.postMessage({ type: "done", data: solutions });
};