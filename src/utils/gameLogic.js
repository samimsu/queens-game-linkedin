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

  // To track if queens are placed diagonally next to each other
  let mainDiagonal = {};
  let antiDiagonal = {};

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (board[row][col] === "Q") {
        // Increment row and column queen counts
        queensPerRow[row]++;
        queensPerCol[col]++;

        // Increment region queen count
        const region = colorRegions[row][col];
        if (!queensPerRegion[region]) {
          queensPerRegion[region] = 0;
        }
        queensPerRegion[region]++;

        // Check if queens are touching diagonally on the main diagonal
        const mainDiagIndex = row - col;
        if (!mainDiagonal[mainDiagIndex]) {
          mainDiagonal[mainDiagIndex] = [];
        }
        mainDiagonal[mainDiagIndex].push(row);

        // Check if queens are touching diagonally on the anti-diagonal
        const antiDiagIndex = row + col;
        if (!antiDiagonal[antiDiagIndex]) {
          antiDiagonal[antiDiagIndex] = [];
        }
        antiDiagonal[antiDiagIndex].push(row);
      }
    }
  }

  // Check if there are exactly 1 queen per row, column, and region
  for (let i = 0; i < size; i++) {
    if (queensPerRow[i] !== 1 || queensPerCol[i] !== 1) {
      return false; // Fail condition if any row or column has more than 1 queen
    }
  }

  for (const region in queensPerRegion) {
    if (queensPerRegion[region] !== 1) {
      return false; // Fail condition if any region has more than 1 queen
    }
  }

  // Check for diagonal adjacency violations
  for (const diagIndex in mainDiagonal) {
    const rows = mainDiagonal[diagIndex];
    if (hasAdjacent(rows)) {
      return false; // Fail condition if queens are touching on the main diagonal
    }
  }

  for (const diagIndex in antiDiagonal) {
    const rows = antiDiagonal[diagIndex];
    if (hasAdjacent(rows)) {
      return false; // Fail condition if queens are touching on the anti-diagonal
    }
  }

  return true; // Pass condition if no violations are found
};

// Helper function to check if queens are placed adjacently in a diagonal
const hasAdjacent = (rowPositions) => {
  rowPositions.sort((a, b) => a - b); // Sort the row positions
  for (let i = 0; i < rowPositions.length - 1; i++) {
    if (rowPositions[i + 1] - rowPositions[i] === 1) {
      return true; // If any two queens are adjacent in the diagonal, return true
    }
  }
  return false;
};
