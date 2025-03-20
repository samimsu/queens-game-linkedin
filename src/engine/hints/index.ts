import { Board, Hint, Regions } from "../interfaces";
import allOtherCellOfARegionAreRemoved from "./allOtherCellOfARegionAreRemoved";
import noHintsFound from "./noHintsFound";

export type HintFunction = (board: Board, regions: Regions) => Hint;

export {
    allOtherCellOfARegionAreRemoved,
    noHintsFound
};