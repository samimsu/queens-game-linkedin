// @ts-ignore
import { createEmptyBoard } from '@/utils/board';
import hintEngineRun from './hints';
import { Board, Cell, Hint, Mark, Regions } from './interfaces';
import placeQueen from './placeQueen';

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
    let boardResolved: Board = createEmptyBoard(this.board.length)
    do {
      const hint = hintEngineRun({ board: boardResolved, regions: this.regions });
      if (hint.crossedCells.length === 0 && hint.highlightedCells.length === 0) return;
  
      for (const cell of hint.crossedCells) {
        boardResolved[cell.row][cell.col] = Mark.Removed
      }
  
      if (hint.highlightedCells.length === 1) {
        boardResolved = placeQueen(boardResolved, this.regions, hint.highlightedCells[0], true)
      }
      
    } while (!Engine.isBoardResolved(boardResolved));
    return boardResolved;
  }

  private static isBoardResolved(board: Board): boolean {
    let nQueens = 0;
    for (const row of board) {
      for (const cell of row) {
        if (cell !== Mark.Queen) continue;+
        nQueens++;
      }
    }
    return nQueens === board.length;
  }
}
