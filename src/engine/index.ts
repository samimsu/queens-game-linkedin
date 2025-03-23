import {
  allOtherCellOfARegionAreRemoved,
  noHintsFound,
  allThisCellsCanBeRemoved,
  allLineContainsOnlyOneRegion,
  highlightedRegionMustContainOneQueen,
} from './hints';
import { Board, Cell, Hint, Mark, Regions } from './interfaces';

type HintFunction = (board: Board, regions: Regions) => Hint;

interface IEngine {
  placeQueen(cell: Cell, autoPlaceXs: boolean): Engine;
  getBoard(): Board;
  hints(): Hint
}

export default class Engine implements IEngine {
  constructor(private board: Board, private readonly regions: Regions) { }

  placeQueen(cell: Cell, autoPlaceXs: boolean = false): this {
    this.board[cell.row][cell.col] = Mark.Queen; // Place the queen

    if (!autoPlaceXs) return this;

    const newXs = [];
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
        xRow < this.board.length &&
        xCol >= 0 &&
        xCol < this.board[0].length &&
        this.board[xRow][xCol] === Mark.Empty
      ) {
        this.board[xRow][xCol] = Mark.Removed;
        newXs.push([xRow, xCol]);
      }
    });

    // Add X's in the row and column
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[cell.row][i] === null) {
        this.board[cell.row][i] = Mark.Removed;
        newXs.push([cell.row, i]);
      }
      if (this.board[i][cell.col] === null) {
        this.board[i][cell.col] = Mark.Removed;
        newXs.push([i, cell.col]);
      }
    }

    // Add X's in the same color region
    const queenRegion = this.regions[cell.row][cell.col];
    for (let r = 0; r < this.board.length; r++) {
      for (let c = 0; c < this.board[0].length; c++) {
        if (
          this.regions[r][c] === queenRegion && // Same region
          this.board[r][c] === null // Empty square
        ) {
          this.board[r][c] = Mark.Removed;
          newXs.push([r, c]);
        }
      }
    }

    return this;
  };

  getBoard(): Board {
    return this.board;
  }

  hints(): Hint {
    const hintStrategies: HintFunction[] = [
      allOtherCellOfARegionAreRemoved,
      highlightedRegionMustContainOneQueen,
      // allLineContainsOnlyOneRegion,// TODO
      // allThisCellsCanBeRemoved, // TODO
    ];
    for (const strategy of hintStrategies) {
      const hint = strategy(this.board, this.regions);
      if (hint) {
        return hint;
      }
    }
    return noHintsFound();
  }
}
