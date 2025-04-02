import { Board, Cell, Mark, Regions } from "./interfaces";

const placeQueen = (board: Board, regions: Regions, cell: Cell, autoPlaceXs: boolean = false): Board => {
    const clonedBoard = JSON.parse(JSON.stringify(board))
    clonedBoard[cell.row][cell.col] = Mark.Queen; // Place the queen

    if (!autoPlaceXs) return clonedBoard;

    const newXs: [number, number][] = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1], // Row and column
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1], // Diagonals
    ];

    // Add X's around the queen
    directions.forEach(([dRow, dCol]) => {
      const xRow = cell.row + dRow;
      const xCol = cell.col + dCol;
      if (
        xRow >= 0 &&
        xRow < clonedBoard.length &&
        xCol >= 0 &&
        xCol < clonedBoard[0].length &&
        clonedBoard[xRow][xCol] === Mark.Empty
      ) {
        clonedBoard[xRow][xCol] = Mark.Removed;
        newXs.push([xRow, xCol]);
      }
    });

    // Add X's in the row and column
    for (let i = 0; i < clonedBoard.length; i++) {
      if (clonedBoard[cell.row][i] === null) {
        clonedBoard[cell.row][i] = Mark.Removed;
        newXs.push([cell.row, i]);
      }
      if (clonedBoard[i][cell.col] === null) {
        clonedBoard[i][cell.col] = Mark.Removed;
        newXs.push([i, cell.col]);
      }
    }

    // Add X's in the same color region
    const queenRegion = regions[cell.row][cell.col];
    for (let r = 0; r < clonedBoard.length; r++) {
      for (let c = 0; c < clonedBoard[0].length; c++) {
        if (
          regions[r][c] === queenRegion && // Same region
          clonedBoard[r][c] === null // Empty square
        ) {
          clonedBoard[r][c] = Mark.Removed;
          newXs.push([r, c]);
        }
      }
    }

    return clonedBoard;
  };

  export default placeQueen;