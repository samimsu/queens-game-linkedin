import { HintFunction } from ".";
import { Board, Cell, Hint, Mark, Region, Regions } from "../interfaces";

const getQueens = (board: Board): Cell[] => {
  const queens: Cell[] = []
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
      if (board[rowIndex][colIndex] !== Mark.Queen) continue;
      queens.push({
        col: colIndex,
        row: rowIndex
      })
    }
  }
  return queens
}

const getUnremovedCellsOfRegion = (board: Board, regions: Regions, cell: Cell): Cell[] => {
  const unremovedCells: Cell[] = []
  const regionTarget: Region = regions[cell.row][cell.col]
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
      if (regions[rowIndex][colIndex] !== regionTarget) continue;
      if (board[rowIndex][colIndex] === Mark.Empty) {
        unremovedCells.push({
          col: colIndex,
          row: rowIndex
        })
      }
    }
  }
  return unremovedCells;
}

const getUnremovedCellsOfARow =  (board: Board, regions: Regions, cell: Cell): Cell[] => {
  const unremovedCells: Cell[] = []

  for (let colIndex = 0; colIndex < board.length; colIndex++) {
    if (board[cell.row][colIndex] === Mark.Empty) {
      unremovedCells.push({
        col: colIndex,
        row: cell.row
      })
    }
  }
  return unremovedCells
}

const getUnremovedCellsOfAColumn =  (board: Board, regions: Regions, cell: Cell): Cell[] => {
  const unremovedCells: Cell[] = []

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    if (board[rowIndex][cell.col] === Mark.Empty) {
      unremovedCells.push({
        col: cell.col,
        row: rowIndex
      })
    }
  }
  return unremovedCells
}

const getUnremovedCellsAround = (board: Board, _regions: Regions, cell: Cell): Cell[] => {
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  return directions
    .map(([dRow, dCol]) => ({
      row: cell.row + dRow,
      col: cell.col + dCol
    }))
    .filter(({ row, col }) =>
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board.length &&
      board[row][col] === Mark.Empty
    );
};

const buildHint = (crossedCells: Cell[]): Hint => {
  return {
    highlightedCells: [],
    crossedCells,
    message: 'TODO'
  }
}

const checkUnplacedXs: HintFunction = (board, regions) => {
  const checks = [
    getUnremovedCellsOfRegion, // 1. check that every other cell in the region is removed
    getUnremovedCellsOfARow, // 2. check that the entire row has been removed
    getUnremovedCellsOfAColumn, // 3. check that the entire column has been removed
    getUnremovedCellsAround, // 4. check that the surrounding cells have been removed
  ];

  for (const queen of getQueens(board)) {
    for (const check of checks) {
      const unremovedCells = check(board, regions, queen);
      if (unremovedCells.length > 0) {
        return buildHint(unremovedCells);
      }
    }
  }

  return null;
};

export default checkUnplacedXs