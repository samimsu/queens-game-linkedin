import { Board, Hint, Regions } from "../interfaces";
import checkLineWithOnlyOneEmptyCell from "./checkLineWithOnlyOneEmptyCell";
import allOtherCellOfARegionAreRemoved from "./allOtherCellOfARegionAreRemoved";
import allThisCellsCanBeRemoved from "./allThisCellsCanBeRemoved";
import highlightedRegionMustContainOneQueen from "./highlightedRegionMustContainOneQueen";
import noHintsFound from "./noHintsFound";
import checkUnplacedXs from "./checkUnplacedXs";

export type HintFunction = (board: Board, regions: Regions) => Hint;

export {
    checkUnplacedXs,
    allOtherCellOfARegionAreRemoved,
    allThisCellsCanBeRemoved,
    checkLineWithOnlyOneEmptyCell,
    highlightedRegionMustContainOneQueen,
    noHintsFound
};