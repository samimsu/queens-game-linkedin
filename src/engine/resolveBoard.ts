import { Board, Mark, Regions } from "./interfaces";
// @ts-ignore
import { createEmptyBoard } from '@/utils/board';
import hintEngineRun from './hints';
import placeQueen from "./placeQueen";

const isBoardResolved = (board: Board): boolean => {
    let nQueens = 0;
    for (const row of board) {
      for (const cell of row) {
        if (cell !== Mark.Queen) continue;+
        nQueens++;
      }
    }
    return nQueens === board.length;
  }

const resolveBoard = (regions: Regions): Board | undefined => {
    let boardResolved: Board = createEmptyBoard(regions.length)
    do {
      const hint = hintEngineRun({ board: boardResolved, regions: regions });
      if (hint.crossedCells.length === 0 && hint.highlightedCells.length === 0) return;
  
      for (const cell of hint.crossedCells) {
        boardResolved[cell.row][cell.col] = Mark.Removed
      }
  
      if (hint.highlightedCells.length === 1) {
        boardResolved = placeQueen(boardResolved, regions, hint.highlightedCells[0], true)
      }
      
    } while (!isBoardResolved(boardResolved));
    return boardResolved;
}

export default resolveBoard