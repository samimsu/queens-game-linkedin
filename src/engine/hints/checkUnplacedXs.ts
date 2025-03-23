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

const getUnremovedCellsAround = (board: Board, cell: Cell): Cell[] => {
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
  // per ogni regina
  for(const queen of getQueens(board)) {
    // 1. controlla che ogni altra altra cella della regione sia rimossa
    const unremovedCellsOfRegion = getUnremovedCellsOfRegion(board, regions, queen)
    if (unremovedCellsOfRegion.length > 0) return buildHint(unremovedCellsOfRegion)
    // 2. che tutta la riga sia stata rimossa
    const unremovedCellsOfARow = getUnremovedCellsOfARow(board, regions, queen)
    if (unremovedCellsOfARow.length > 0) return buildHint(unremovedCellsOfARow)
    // 3. che tutta la colonna sia stata rimossa
    const unremovedCellsOfAColumn = getUnremovedCellsOfAColumn(board, regions, queen)
    if (unremovedCellsOfAColumn.length > 0) return buildHint(unremovedCellsOfAColumn)
    // 4. che le celle intorno siano state rimosse
    const unremovedCellsAround = getUnremovedCellsAround(board, regions, queen)
    if (unremovedCellsAround.length > 0) return buildHint(unremovedCellsAround)
  }
  return null;
}

export default checkUnplacedXs