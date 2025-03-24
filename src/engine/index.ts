import {
  allOtherCellOfARegionAreRemoved,
  noHintsFound,
  allThisCellsCanBeRemoved,
  checkLineWithOnlyOneEmptyCell,
  checkUnplacedXs,
  highlightedRegionMustContainOneQueen,
} from './hints';
import { Board, Cell, Hint, Mark, Regions } from './interfaces';
import placeQueen from './placeQueen';

type HintFunction = (board: Board, regions: Regions) => Hint;

interface IEngine {
  placeQueen(cell: Cell, autoPlaceXs: boolean): Engine;
  getBoard(): Board;
  hints(): Hint
}

export default class Engine implements IEngine {
  constructor(private board: Board, private readonly regions: Regions) { }

  placeQueen(cell: Cell, autoPlaceXs: boolean = false): this {
    this.board = placeQueen(this.board, this.regions, cell, autoPlaceXs);
    return this
  };

  getBoard(): Board {
    return this.board;
  }

  hints(): Hint {
    const hintStrategies: HintFunction[] = [
      allOtherCellOfARegionAreRemoved,
      checkUnplacedXs,
      highlightedRegionMustContainOneQueen,
      checkLineWithOnlyOneEmptyCell,
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
