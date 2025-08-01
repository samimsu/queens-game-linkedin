// Since Web Workers don't have access to the main thread's imports, we define the logic inline
self.onmessage = async (e) => {
  const { board } = e.data;

  async function getSolutions(board: string[][]) {
    const N = board.length;
    const solutions: number[][][] = [];
    const colorBoard = board.map((row) => [...row]);
    let solutionCount = 0;

    function isSafe(tempBoard: number[][], row: number, col: number): boolean {
      for (let i = 0; i < row; i++) {
        if (tempBoard[i][col] === 1) return false;
      }
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
      return true;
    }

    async function backtrack(
      row: number,
      tempBoard: number[][]
    ): Promise<boolean> {
      if (row === N) {
        const solution: number[][] = [];
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            if (tempBoard[i][j] === 1) solution.push([i, j]);
          }
        }
        const colorSet = new Set(solution.map(([i, j]) => colorBoard[i][j]));
        if (colorSet.size === N) {
          solutions.push(solution);
          solutionCount++;
          self.postMessage({ type: "solution", data: solution });
          await new Promise((resolve) => setTimeout(resolve, 10)); // Small delay to allow message posting
          if (solutionCount >= 100) {
            self.postMessage({ type: "done", data: solutions });
            self.close();
            return true;
          }
        }
        return false;
      }

      for (let col = 0; col < N; col++) {
        if (isSafe(tempBoard, row, col)) {
          tempBoard[row][col] = 1;
          const shouldStop = await backtrack(row + 1, tempBoard);
          if (shouldStop) return true;
          tempBoard[row][col] = 0;
        }
      }
      return false;
    }

    const initialBoard = Array.from({ length: N }, () => Array(N).fill(0));
    await backtrack(0, initialBoard);
    return solutions;
  }

  const solutions = await getSolutions(board);
  self.postMessage({ type: "done", data: solutions });
};
