import React from "react";
import { Board, Cell, Mark, Region, Regions } from "../interfaces";
// @ts-ignore
import Queen from "@/components/Queen";
import { HintFunction } from ".";
import { Trans, getI18n } from "react-i18next";


const getEmptyCells = (
  board: Board,
  regions: Regions,
  region: Region
): Cell[] => {
  const emptyCells: Cell[] = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === Mark.Empty && regions[row][col] === region) {
        emptyCells.push({ row, col });
      }
    }
  }

  return emptyCells;
};

const allOtherCellOfARegionAreRemoved: HintFunction = ({ board, regions }) => {
  for (let i = 65; i < 65 + regions.length; i++) {
    const region: Region = String.fromCharCode(i) as Region;
    const emptyCells = getEmptyCells(board, regions, region);
    if (emptyCells.length === 1) {
      return {
        highlightedCells: emptyCells,
        crossedCells: [],
        toRemove: [],
        queen: emptyCells[0],
        message: (
          <div>
            <Trans
              i18nKey="HINTS.INSERT_QUEEN"
              components={{ p: <p />, queen: <Queen size="20" className="inline mx-1 mb-1" />}}              
              values={{ typeArea: getI18n().t('COLOR_AREA') }}
            />
          </div>
        ),
      };
    }
  }

  return null;
};

export default allOtherCellOfARegionAreRemoved;
