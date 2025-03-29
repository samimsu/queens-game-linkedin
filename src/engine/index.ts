import hintEngineRun from './hints';
import { Board, Cell, Hint, Mark, Regions } from './interfaces';
import placeQueen from './placeQueen';
import resolveBoard from './resolveBoard';

interface IEngine {
  placeQueen(cell: Cell, autoPlaceXs: boolean): Engine;
  getBoard(): Board;
  getHint(): Hint
}

export default class Engine implements IEngine {
  private boardResolved?: Board;
  constructor(private board: Board, private readonly regions: Regions) {
    this.boardResolved = this.resolveBoard();
  }

  placeQueen(cell: Cell, autoPlaceXs: boolean = false): this {
    this.board = placeQueen(this.board, this.regions, cell, autoPlaceXs);
    return this
  };

  getBoard(): Board {
    return this.board;
  }

  getHint(): Hint {
    return hintEngineRun({ board: this.board, regions: this.regions, boardResolved: this.boardResolved })
  }

  resolveBoard(): Board | undefined {
    return resolveBoard(this.regions);
  }
}
