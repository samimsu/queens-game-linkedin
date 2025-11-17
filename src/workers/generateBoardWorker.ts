// Since Web Workers don't have access to the main thread's imports, we define the logic inline

type Board = string[][];

const ALL_LABELS = Object.freeze(
  Array.from({ length: 21 }, (_, i) =>
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

function hasDisconnectedColors(board: string[][]) {
  const colorsToCheck = ALL_LABELS.slice(0, board.length);
  for (const color of colorsToCheck) {
    const coordsForColor = findCoordsForColor(color, board);
    if (coordsForColor.length === 1) {
      continue;
    }
    // start with first coord and check if it's connected to all other coords for this color
    const unconnectedCoords = new Set<string>();
    for (const { row, col } of coordsForColor) {
      unconnectedCoords.add(`${row},${col}`);
    }
    const connectedCoords = new Set<string>();
    connectedCoords.add(`${coordsForColor[0].row},${coordsForColor[0].col}`);
    unconnectedCoords.delete(
      `${coordsForColor[0].row},${coordsForColor[0].col}`,
    );
    let lastConnectedSize = 0;
    while (unconnectedCoords.size > 0) {
      for (const coordStr of connectedCoords) {
        const [row, col] = coordStr.split(",").map(Number);

        for (const uc of unconnectedCoords) {
          const [otherRow, otherCol] = uc.split(",").map(Number);
          if (
            Math.abs(row - otherRow) === 1 &&
            Math.abs(col - otherCol) === 0
          ) {
            connectedCoords.add(uc);
            unconnectedCoords.delete(uc);
            continue;
          }
          if (
            Math.abs(row - otherRow) === 0 &&
            Math.abs(col - otherCol) === 1
          ) {
            connectedCoords.add(uc);
            unconnectedCoords.delete(uc);
            continue;
          }
        }
      }
      if (
        lastConnectedSize === connectedCoords.size &&
        unconnectedCoords.size > 0
      ) {
        console.log(
          "Connected size did not change, color",
          color,
          "is disconnected",
        );
        return true;
      }
      lastConnectedSize = connectedCoords.size;
    }
  }
  return false;
}

function getCryptoRandom() {
  const randomBuffer = new Uint32Array(1);
  self.crypto.getRandomValues(randomBuffer);
  return randomBuffer[0] / (0xffffffff + 1);
}

function getCryptoRandomNeg128To127() {
  const randomBuffer = new Int8Array(1);
  self.crypto.getRandomValues(randomBuffer);
  return randomBuffer[0];
}

self.onmessage = async (e) => {
  const { size } = e.data;
  const startTime = Date.now();
  console.log("Generating board", size, new Date(startTime));

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
        }) &&
        !hasDisconnectedColors(altBoard)
      ) {
        const solns = await getSolutions(altBoard);
        if (solns.length === 1) {
          return altBoard;
        }
      } else {
        console.log(
          "After shifting colors in board, found disconnected regions or single colors. Direction",
          directions[i],
          "Board",
          JSON.stringify(altBoard),
        );
      }
    }
  }

  const RATE_AT_DROP = 0.65;
  function computePlacementProbability(
    size: number,
    usedCount: number,
  ): number {
    // Placeholder for the actual probability computation logic
    if (usedCount === 0) {
      return 1.0;
    }
    if (usedCount <= 2) {
      return RATE_AT_DROP;
    }

    if (usedCount >= size * size) {
      return 0.0;
    }
    // linear drop from RATE_AT_DROP to 0.1 at size*size
    return RATE_AT_DROP - (usedCount - 2) * (0.5 / (size * size - 2));
  }

  function weightedRandomChoice(weights: number[]): number {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const randomValue = getCryptoRandom() * totalWeight;
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

    // Generate all startingPositions and shuffle them
    const startingPositions: [number, number][] = [];
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        startingPositions.push([row, col]);
      }
    }
    startingPositions.sort(() => getCryptoRandomNeg128To127());

    const usedRows = new Set<number>();
    const usedCols = new Set<number>();
    let labelsRemaining = size;
    const labels = ALL_LABELS.slice(0, size);

    for (const [row, col] of startingPositions) {
      if (!usedRows.has(row) && !usedCols.has(col)) {
        board[row][col] = labels[labels.length - labelsRemaining];
        if (board[row][col] === undefined) {
          console.log(
            "Ran out of labels!",
            { size, labelsRemaining, row, col, board },
            startingPositions,
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
                if (getCryptoRandom() < placementProbability) {
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
    const labels = ALL_LABELS.slice(0, N);
    const colorCoords = new Map<string, { row: number; col: number }[]>();
    const coordColors = new Map<string, string>();
    for (const label of labels) {
      const coordsForColor = findCoordsForColor(label, board);
      colorCoords.set(label, coordsForColor);
      for (const { row, col } of coordsForColor) {
        coordColors.set(`${row},${col}`, label);
      }
    }
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

      const color = coordColors.get(`${row},${col}`);
      // see if any square in this color region has been marked
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

  const MAX_MINUTES_PER_LEVEL = 4;
  const MAX_MINUTES_PER_LEVEL_13_PLUS = 7;
  const MIN_IMPROVE_TIME_SECONDS = 60; // if we find a board, but it is not the best candidate, give up after this many seconds and just use the candidate
  async function generateLevel(size: number) {
    let colorRegions = generateRandomLevel(size);
    let attemptCounter = 0;
    let success = false;
    let solutionsCount = 0;
    let bestCandidate: undefined | Board;

    let lastLogTime = Date.now();
    const minutesToWait =
      size >= 13 ? MAX_MINUTES_PER_LEVEL_13_PLUS : MAX_MINUTES_PER_LEVEL;
    const startTime = Date.now();
    while (Date.now() - startTime < 1000 * 60 * minutesToWait) {
      const elapsedTimeSeconds = (Date.now() - startTime) / 1000;
      const remainingTimeSeconds = minutesToWait * 60 - elapsedTimeSeconds;
      attemptCounter++;
      if (elapsedTimeSeconds > MIN_IMPROVE_TIME_SECONDS && bestCandidate) {
        console.log("Using best candidate");
        success = true;
        colorRegions = bestCandidate;
        self.postMessage({ type: "generatedBoard", data: colorRegions });
        break;
      }
      const firstSolutions = (await getSolutions(colorRegions)) as number[][][];
      solutionsCount = firstSolutions.length;
      if (solutionsCount === 1) {
        // try to get rid of single color regions
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
        if (
          findSingleColorRegions(colorRegions).length > 0 &&
          elapsedTimeSeconds < MIN_IMPROVE_TIME_SECONDS
        ) {
          console.log(
            "Found single color regions. Saving this as the best candidate",
          );
          bestCandidate = colorRegions;
          self.postMessage({ type: "savingCandidate", data: colorRegions });
        } else {
          console.log(
            "Found 1 unique solution!\n\n",
            colorRegions.map((r) => r.join(" ")).join("\n"),
          );
          success = true;
          self.postMessage({ type: "generatedBoard", data: colorRegions });
          break;
        }
      } else if (lastLogTime + 10_000 < Date.now()) {
        lastLogTime = Date.now();
        const boardGenerationRate = attemptCounter / (elapsedTimeSeconds + 1);
        const message = `Generated board has ${solutionsCount > 1 ? "multiple" : "no"} solutions.`;

        console.log(
          message,
          "Remaining seconds",
          remainingTimeSeconds,
          "Attempts",
          attemptCounter,
          "rate",
          boardGenerationRate,
          "solutions/s",
          "elapsed seconds",
          elapsedTimeSeconds,
        );
      }
      if (success) {
        break;
      }
      colorRegions = generateRandomLevel(size);
    }
    console.log(
      "Finished generating board. Elapsed seconds",
      Date.now() - startTime,
    );

    if (success) {
      return colorRegions;
    }

    return null;
  }

  const solutions = await generateLevel(size);
  self.postMessage({ type: "done", data: solutions });
  self.close();
};
