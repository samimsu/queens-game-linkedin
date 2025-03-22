import { HintFunction } from ".";
import { Board, Mark, Regions } from "../interfaces";

const isRowContainsOnlyOneRegion = (regions: Regions, rowIndex: number): boolean => {
    const row = regions[rowIndex];
    const regionsInRow = new Set(row);
    return regionsInRow.size === 1;
}

const isColContainsOnlyOneRegion = (regions: Regions, colIndex: number): boolean => {
    const col = regions[colIndex];
    const regionsInRow = new Set(col);
    return regionsInRow.size === 1;
}

const allLineContainsOnlyOneRegion: HintFunction = (board: Board, regions: Regions) => {
    for (let rowIndex = 0; rowIndex < regions.length; rowIndex++) {
        const rowContainsOnlyOneRegion = isRowContainsOnlyOneRegion(regions, rowIndex);
        if (!rowContainsOnlyOneRegion) continue;

        const atLeastOneCellIsEmpty = board[rowIndex].some(cell => cell === Mark.Empty);

        if (!atLeastOneCellIsEmpty) continue;

        return {
            highlightedCells: board[rowIndex].map((_, colIndex) => ({ row: rowIndex, col: colIndex })),
            crossedCells: [],
            message: `In this line there is only one region.`
        }
    }
    return null;
};

export default allLineContainsOnlyOneRegion;