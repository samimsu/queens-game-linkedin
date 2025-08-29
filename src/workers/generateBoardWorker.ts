// Since Web Workers don't have access to the main thread's imports, we define the logic inline

type Board = string[][];

const ALL_LABELS = Object.freeze(
  Array.from({ length: 15 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i),
  ),
);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

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

function findSingleColorRegions(
  board: string[][],
): { color: string; row: number; column: number }[] {
  const colorsToCheck = ALL_LABELS.slice(0, board.length);
  const result: { color: string; row: number; column: number }[] = [];
  for (const color of colorsToCheck) {
    const coordsForColor = findCoordsForColor(color, board);
    if (coordsForColor.length === 1) {
      result.push({
        color,
        row: coordsForColor[0].row,
        column: coordsForColor[0].col,
      });
    }
  }
  return result;
}

self.onmessage = async (e) => {
  const { size } = e.data;
  console.log("Generating board", size);

  // returns alternate boards with single color regions expanded
  async function replaceSingleColorRegionsInBoard(
    colorRegions: string[][],
  ): Promise<Board | undefined> {
    const singleColorRegions: { color: string; row: number; column: number }[] =
      findSingleColorRegions(colorRegions);

    if (singleColorRegions.length === 0) {
      console.log("No single color regions found");
      return undefined;
    }

    // for each direction, try and expand the single color regions
    for (let i = 0; i < directions.length; i++) {
      const [deltaRow, deltaCol] = directions[i];
      const altBoard = JSON.parse(JSON.stringify(colorRegions));
      for (const { color, row, column } of singleColorRegions) {
        if (
          row + deltaRow >= 0 &&
          row + deltaRow < altBoard.length &&
          column + deltaCol >= 0 &&
          column + deltaCol < altBoard[row + deltaRow].length
        ) {
          altBoard[row + deltaRow][column + deltaCol] = color;
        }
      }
      if (
        singleColorRegions.every((scr) => {
          return findCoordsForColor(scr.color, altBoard).length > 1;
        })
      ) {
        const solns = await getSolutions(altBoard);
        if (solns.length === 1) {
          return altBoard;
        }
      } else {
        console.log(
          "Unable to expand board to remove all single color regions",
        );
      }
    }
  }

  function computePlacementProbability(
    size: number,
    usedCount: number,
  ): number {
    // Placeholder for the actual probability computation logic
    if (usedCount === 0) {
      return 1.0;
    }
    if (usedCount <= 2) {
      return 0.6;
    }

    if (usedCount >= size * size) {
      return 0.0;
    }
    // linear drop from 0.6 at 2 to 0.1 at size*size
    return 0.6 - (usedCount - 2) * (0.5 / (size * size - 2));
  }

  function weightedRandomChoice(weights: number[]): number {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < weights.length; i++) {
      cumulativeWeight += weights[i];
      if (randomValue < cumulativeWeight) {
        return i;
      }
    }

    return weights.length - 1; // Fallback to the last index
  }

  const generateRandomLevel = (size: number): string[][] => {
    const board: string[][] = Array.from({ length: size }, () =>
      Array(size).fill(" "),
    );

    // Generate all positions and shuffle them
    const positions: [number, number][] = [];
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        positions.push([row, col]);
      }
    }
    positions.sort(() => Math.random() * 10 - Math.random() * 10); // Shuffle positions

    const usedRows = new Set<number>();
    const usedCols = new Set<number>();
    let labelsRemaining = size;
    const labels = ALL_LABELS.slice(0, size);

    for (const [row, col] of positions) {
      if (!usedRows.has(row) && !usedCols.has(col)) {
        board[row][col] = labels[labels.length - labelsRemaining];
        if (board[row][col] === undefined) {
          console.log(
            "Ran out of labels!",
            { size, labelsRemaining, row, col, board },
            positions,
          );
          throw new Error("Ran out of labels");
        }
        usedRows.add(row);
        usedCols.add(col);
        labelsRemaining--;
        if (labelsRemaining === 0) break;
      }
    }

    const usedColorCount: Record<string, number> = Object.fromEntries(
      ALL_LABELS.map((label) => [label, 1]),
    );

    let iteration = 0;
    while (true) {
      if (++iteration > 1000) {
        console.log(`Iteration ${iteration}`, JSON.stringify(board, null, 2));
        throw new Error("Too many iterations");
      }
      let unsetSpots = 0;

      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          if (board[row][col] === " ") {
            unsetSpots++;
            const filledNeighbors = new Set<string>();

            for (const [dr, dc] of [
              [-1, 0],
              [1, 0],
              [0, -1],
              [0, 1],
            ]) {
              const nr = row + dr;
              const nc = col + dc;
              if (
                nr >= 0 &&
                nr < size &&
                nc >= 0 &&
                nc < size &&
                board[nr][nc] !== " "
              ) {
                filledNeighbors.add(board[nr][nc]);
              }
            }

            if (filledNeighbors.size > 0) {
              if (filledNeighbors.size === 1) {
                const neighborColor: string = Array.from(filledNeighbors)[0];
                const placementProbability = computePlacementProbability(
                  size,
                  usedColorCount[neighborColor],
                );
                if (placementProbability < 0) {
                  console.log(
                    "placement probability is negative",
                    placementProbability,
                    size,
                    usedColorCount[neighborColor],
                  );
                }
                if (Math.random() < placementProbability) {
                  usedColorCount[neighborColor]++;
                  board[row][col] = neighborColor;
                }
              } else {
                const neighbors = Array.from(filledNeighbors);
                const weights = neighbors.map((neighbor) =>
                  computePlacementProbability(size, usedColorCount[neighbor]),
                );
                const choice = neighbors[weightedRandomChoice(weights)];
                usedColorCount[choice]++;
                board[row][col] = choice;
              }
            }
          }
        }
      }

      if (unsetSpots === 0) break;
    }
    return board;
  };

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

    function backtrack(row: number, tempBoard: number[][]): boolean {
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
          if (solutionCount >= 2) {
            return true;
          }
        }
        return false;
      }

      for (let col = 0; col < N; col++) {
        if (isSafe(tempBoard, row, col)) {
          tempBoard[row][col] = 1;
          const shouldStop = backtrack(row + 1, tempBoard);
          if (shouldStop) return true;
          tempBoard[row][col] = 0;
        }
      }
      return false;
    }

    const initialBoard = Array.from({ length: N }, () => Array(N).fill(0));
    backtrack(0, initialBoard);
    return solutions;
  }

  async function generateLevel(size: number) {
    let colorRegions = generateRandomLevel(size);
    let triesRemaining = 2500;
    let success = false;
    let solutionsCount = 0;

    self.postMessage({
      type: "progress",
      data: 1,
    });
    while (triesRemaining-- > 0) {
      const firstSolutions = (await getSolutions(colorRegions)) as number[][][];
      solutionsCount = firstSolutions.length;
      if (solutionsCount === 1) {
        // try and get rid of single color regions
        const alternateBoard =
          await replaceSingleColorRegionsInBoard(colorRegions);
        if (alternateBoard) {
          console.log(
            "Replacing board with expanded region board\n\n",
            colorRegions.map((r) => r.join(" ")).join("\n"),
            "\n",
            alternateBoard.map((r) => r.join(" ")).join("\n"),
          );
          colorRegions = alternateBoard;
        }
        console.log("Found 1 unique solution!");
        success = true;
        self.postMessage({ type: "generatedBoard", data: colorRegions });
      } else if (triesRemaining % 100 === 0) {
        self.postMessage({
          type: "progress",
          data: Number(2500 - triesRemaining),
        });
        if (solutionsCount > 1) {
          console.log(
            "Generated board has (at least)",
            solutionsCount,
            "solutions. Remaining attempts",
            triesRemaining,
          );
        } else {
          console.log(
            "Generated board has no solutions. Remaining attempts",
            triesRemaining,
          );
        }
      }
      if (success) {
        break;
      }
      colorRegions = generateRandomLevel(size);
    }

    if (success) {
      return colorRegions;
    }

    return null;
  }

  const solutions = await generateLevel(size);
  self.postMessage({ type: "done", data: solutions });
  self.close();
};
