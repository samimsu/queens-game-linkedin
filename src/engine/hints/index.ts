import { Board, Hint, Regions } from "../interfaces";
import checkLineWithOnlyOneEmptyCell from "./checkLineWithOnlyOneEmptyCell";
import allOtherCellOfARegionAreRemoved from "./allOtherCellOfARegionAreRemoved";
import allThisCellsCanBeRemoved from "./allThisCellsCanBeRemoved";
import highlightedRegionMustContainOneQueen from "./highlightedRegionMustContainOneQueen";
import noHintsFound from "./noHintsFound";
import checkUnplacedXs from "./checkUnplacedXs";
import checkIncorrectCells from "./checkIncorrectCells";

export type HintFunctionProps = {
  board: Board,
  regions: Regions,
  boardResolved?: Board
}
export type HintFunction = (props: HintFunctionProps) => Hint | null;

export {
    checkIncorrectCells,
    checkUnplacedXs,
    allOtherCellOfARegionAreRemoved,
    allThisCellsCanBeRemoved,
    checkLineWithOnlyOneEmptyCell,
    highlightedRegionMustContainOneQueen,
    noHintsFound,
};

const run = ({ board, regions, boardResolved }: HintFunctionProps): Hint => {
    const hintStrategies: HintFunction[] = [
      checkIncorrectCells,
      allOtherCellOfARegionAreRemoved,
      checkUnplacedXs,
      highlightedRegionMustContainOneQueen,
      checkLineWithOnlyOneEmptyCell,
      // allThisCellsCanBeRemoved, // TODO
    ];

    for (const strategy of hintStrategies) {
      const hint = strategy({board, regions, boardResolved });
      if (hint) {
        return hint;
      }
    }
    return noHintsFound();
  }

  export default run;