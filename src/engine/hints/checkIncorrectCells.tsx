import { getI18n } from "react-i18next";
import { HintFunction } from ".";
import { Cell, Mark } from "../interfaces";

const checkIncorrectCells: HintFunction = ({ board, boardResolved }) => {
  if (!boardResolved) return null;
  console.log("board resolved", boardResolved);
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++)
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
      if (board[rowIndex][colIndex] === Mark.Empty) continue;
      if (board[rowIndex][colIndex] === boardResolved[rowIndex][colIndex])
        continue;
      const cell: Cell = {
        col: colIndex,
        row: rowIndex,
      };
      return {
        highlightedCells: [cell],
        crossedCells: [],
        toRemove: boardResolved[rowIndex][colIndex] === Mark.Removed ? [cell] : [],
        queen: boardResolved[rowIndex][colIndex] === Mark.Queen ? cell : undefined,
        message: getI18n().t('HINTS.HIGHLIGHTED_CELL_IS_INCORRECT'),
      };
    }

  return null;
};

export default checkIncorrectCells;
