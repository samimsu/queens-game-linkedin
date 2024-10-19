// import { BOARD_SIZE, colorRegions } from "./board";

// Check if it's safe to place a queen
export const isSafeToPlaceQueen = (board, row, col, size, colorRegions) => {
  const region = colorRegions[row][col];

  // Check for same row and column
  for (let i = 0; i < size; i++) {
    if (board[row][i] === "Q" || board[i][col] === "Q") return false;
  }

  // Check adjacent diagonal squares
  const adjacentDiagonals = [
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ];

  for (let [r, c] of adjacentDiagonals) {
    if (board[r]?.[c] === "Q") return false;
  }

  // Check for the same region
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (colorRegions[r][c] === region && board[r][c] === "Q") {
        return false;
      }
    }
  }

  return true;
};

// Check if all queens are placed correctly
export const checkWinCondition = (board, size, colorRegions) => {
  let queensPerRow = Array(size).fill(0);
  let queensPerCol = Array(size).fill(0);
  let queensPerRegion = {};

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (board[row][col] === "Q") {
        queensPerRow[row]++;
        queensPerCol[col]++;

        const region = colorRegions[row][col];
        if (!queensPerRegion[region]) {
          queensPerRegion[region] = 0;
        }
        queensPerRegion[region]++;
      }
    }
  }

  // Ensure each row, column, and region has exactly one queen
  const allRowsCorrect = queensPerRow.every((count) => count === 1);
  const allColsCorrect = queensPerCol.every((count) => count === 1);
  const allRegionsCorrect = Object.values(queensPerRegion).every(
    (count) => count === 1
  );

  return allRowsCorrect && allColsCorrect && allRegionsCorrect;
};
