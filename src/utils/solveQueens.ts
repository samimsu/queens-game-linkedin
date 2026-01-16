const ALL_LABELS = Object.freeze(
  Array.from({ length: 15 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i),
  ),
);

type Board = string[][];

function findCoordsForColor(
  color: string,
  board: Board,
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
  onSolutionFound?: (solution: number[][]) => Promise<boolean>,
) {
  const N = board.length;
  const solutions: number[][][] = [];
  const labels = ALL_LABELS.slice(0, N);
  const colorCoords = new Map<string, { row: number; col: number }[]>();
  for (const label of labels) {
    const coordsForColor = findCoordsForColor(label, board);
    colorCoords.set(label, coordsForColor);
  }

  // Create a copy of the input board to work with
  const colorBoard = board.map((row) => [...row]);

  function isSafe(tempBoard: number[][], row: number, col: number) {
    // Check same column
    for (let i = 0; i < row; i++) {
      if (tempBoard[i][col] === 1) {
        return false;
      }
    }

    // Check diagonals
    const toCheck = [
      [-1, -1], // upper-left
      [-1, 1], // upper-right
      [1, -1], // lower-left
      [1, 1], // lower-right
    ];
    for (let [dx, dy] of toCheck) {
      let x = row + dx;
      let y = col + dy;
      if (x >= 0 && x < N && y >= 0 && y < N && tempBoard[x][y] === 1) {
        return false;
      }
    }
    // color at row column
    const color = board[row][col];
    // see if any other of this color have a 1
    const coordsForColor = colorCoords.get(color!);
    if (coordsForColor) {
      for (const { row, col } of coordsForColor) {
        if (tempBoard[row][col] === 1) {
          return false;
        }
      }
    }

    return true;
  }

  async function backtrack(
    row: number,
    tempBoard: number[][],
  ): Promise<boolean> {
    if (row === N) {
      // Collect queen positions
      const solution = [];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (tempBoard[i][j] === 1) {
            solution.push([i, j]);
          }
        }
      }
      // Check if solution has distinct colors
      const colorSet = new Set(solution.map(([i, j]) => colorBoard[i][j]));
      if (colorSet.size === N) {
        solutions.push(solution);
        if (onSolutionFound) {
          const shouldStop = await onSolutionFound(solution);
          if (shouldStop) return true;
        }
        // if (onSolutionFound) await onSolutionFound(solution);
      }
      return false;
    }

    for (let col = 0; col < N; col++) {
      if (isSafe(tempBoard, row, col)) {
        tempBoard[row][col] = 1;
        const shouldStop = await backtrack(row + 1, tempBoard);
        if (shouldStop) return true;
        tempBoard[row][col] = 0; // Backtrack
      }
    }
    return false;
  }

  // Initialize empty board for queen placement
  const initialBoard = Array.from({ length: N }, () => Array(N).fill(0));
  await backtrack(0, initialBoard);
  return solutions;
}
