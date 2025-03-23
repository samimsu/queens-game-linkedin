import { Board, Hint, Regions } from "../interfaces";
import allLineContainsOnlyOneRegion from "./allLineContainsOnlyOneRegion";
import allOtherCellOfARegionAreRemoved from "./allOtherCellOfARegionAreRemoved";
import allThisCellsCanBeRemoved from "./allThisCellsCanBeRemoved";
import highlightedRegionMustContainOneQueen from "./highlightedRegionMustContainOneQueen";
import noHintsFound from "./noHintsFound";

export type HintFunction = (board: Board, regions: Regions) => Hint;

export {
    allOtherCellOfARegionAreRemoved,
    allThisCellsCanBeRemoved,
    allLineContainsOnlyOneRegion,
    highlightedRegionMustContainOneQueen,
    noHintsFound
};