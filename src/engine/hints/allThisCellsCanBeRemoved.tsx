import { HintFunction } from ".";
import { Board, Cell, Mark, Region, Regions } from "../interfaces";

const findAllEmptyCellsInRegion = (board: Board, regions: Regions, region: Region): Cell[] => {
    const cells: Cell[] = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (regions[row][col] === region && board[row][col] === Mark.Empty) {
                cells.push({ row, col });
            }
        }
    }
    return cells;
};

const allThisCellsCanBeRemoved: HintFunction = ({ board, regions }) => {
    for (let i = 65; i < 65 + regions.length; i++) {
        const region: Region = String.fromCharCode(i) as Region;
        const emptyCells = findAllEmptyCellsInRegion(board, regions, region);
        for (const cell of emptyCells) {
            // per ogni cella, controllo se posso rimuoverla
        }

    }
    return {
        highlightedCells: [],
        crossedCells: [],
        toRemove: [],
        queen: null,
        message: null
    }
};

export default allThisCellsCanBeRemoved;