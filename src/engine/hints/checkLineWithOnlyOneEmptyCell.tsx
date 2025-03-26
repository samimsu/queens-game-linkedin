import { Trans, getI18n } from "react-i18next";
import { HintFunction } from ".";
import { Cell, Mark } from "../interfaces";
import React from "react";
import Queen from "@/components/Queen";

const getIndexesOfEmptyCellsOfLine = (line: Mark[]): number[] => {
  return line.reduce<number[]>((acc, mark, index) => {
    if (mark === Mark.Empty) {
      acc.push(index)
    }
    return acc
  }, []);
};

const checkLineWithOnlyOneEmptyCell: HintFunction = ({ board, regions }) => {
  let highlightedCells: Cell[] = [];
  let typeArea: "ROW" | "COLUMN";
  // 1. Controlla tutte le righe
  for (let rowIndex = 0; rowIndex < regions.length; rowIndex++) {
    const indexesOfEmptyCells = getIndexesOfEmptyCellsOfLine(board[rowIndex]);
    if (indexesOfEmptyCells.length !== 1) continue;
    typeArea = "ROW"
    highlightedCells = indexesOfEmptyCells.map((index) => ({
      row: rowIndex,
      col: index,
    }))
    break;
  }

  // 2. Controlla tutte le colonne
  if (highlightedCells.length == 0) {
    for (let colIndex = 0; colIndex < regions.length; colIndex++) {
      const col: Mark[] = []
      for (let rowIndex = 0; rowIndex < regions.length; rowIndex++) {
        col.push(board[rowIndex][colIndex])
      }
      const indexesOfEmptyCells = getIndexesOfEmptyCellsOfLine(col);
      if (indexesOfEmptyCells.length !== 1) continue;
      typeArea = "COLUMN"
      highlightedCells = indexesOfEmptyCells.map((index) => ({
        row: index,
        col: colIndex,
      }))
      break;
    }
  }

  return highlightedCells.length > 0 
    ? {
      highlightedCells,
      crossedCells: [],
      toRemove: [],
      message:(
        <Trans
          i18nKey="HINTS.INSERT_QUEEN"
          components={{ p: <p />, queen: <Queen size="20" className="inline mx-1 mb-1" />}}
          values={{ typeArea: getI18n().t(typeArea) }}
        />
      ),
    }
    : null;
};

export default checkLineWithOnlyOneEmptyCell;
