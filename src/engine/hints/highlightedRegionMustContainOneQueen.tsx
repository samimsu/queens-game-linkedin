import React from "react";
import { HintFunction } from ".";
import Queen from "@/components/Queen";
import { Board, Cell, Mark, Region, Regions } from "../interfaces";
import Engine from "..";
import { Trans } from "react-i18next";
import placeQueen from "../placeQueen";

const findRegionsWithAllCellsRemoved = (board: Board, regions: Regions): Set<Region> => {
  const map = new Map<Region, number>()
  for (let i = 65; i < 65 + regions.length; i++) {
    const region: Region = String.fromCharCode(i) as Region;
    map.set(region, 0)
    let emptyCells = 0;
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        if (board[row][col] === Mark.Empty && regions[row][col] === region) {
          emptyCells++;
          map.set(region, map.get(region) + 1)
        }
      }
    }
    // if (emptyCells === 0) {
    //   return region;
    // }
  }

  const regionsWithoutEmptyCells = new Set<Region>();
  for (const [region, count] of Array.from(map.entries())) {
    if (count !== 0) continue;
    regionsWithoutEmptyCells.add(region);
  }
  
  return regionsWithoutEmptyCells;
}

const getRegionRemoved = (set1: Set<Region>, set2: Set<Region>): Region => {
  for (let regionInSet2 of Array.from(set2.keys())) {
    if (!set1.has(regionInSet2)) return regionInSet2
  }
  return null
}

const highlightedRegionMustContainOneQueen: HintFunction = ({board, regions}) => {
  const crossedCells: Cell[] = [];
  let regionToHighlighted: Region
  let selectedRegion: Region = null;
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cell = row[colIndex];
      // 1. controlla che la cella sia vuota
      if (cell !== Mark.Empty) continue;
      // 1.1 controlla che la cella sia nella regione selezionata
      if (selectedRegion !== null && regions[rowIndex][colIndex] !== selectedRegion) continue;
      // 2. piazza una regina nella cella
      const regionWithAllCellsRemovedBeforeQueenPlaced = findRegionsWithAllCellsRemoved(board, regions);
      const boardWithQueenSet = placeQueen(board, regions, { row: rowIndex, col: colIndex }, true);
      // 3. controlla se ci sono regioni con sole celle eliminate
      const regionWithAllCellsRemovedAfterQueenPlaced = findRegionsWithAllCellsRemoved(boardWithQueenSet, regions);
      regionWithAllCellsRemovedAfterQueenPlaced.delete(regions[rowIndex][colIndex])
      const regionRemoved = getRegionRemoved(regionWithAllCellsRemovedBeforeQueenPlaced, regionWithAllCellsRemovedAfterQueenPlaced)
      // 4. se sì, salva la cella nella lista delle celle da eliminare e la regione che elimina
      if (regionRemoved !== null && regionToHighlighted == null) {
        regionToHighlighted = regionRemoved;
      }

      if (regionRemoved !== null && regionRemoved === regionToHighlighted) {
        crossedCells.push({ row: rowIndex, col: colIndex });
        // selectedRegion = regionWithAllCellsRemoved;
      }
      // 5. al ciclo successivo, oltre al controllo 1, controlla che la cella non sia nella regione salvata al punto 4
    }
  }

  const highlightedCells: Cell[] = [];
  if (regionToHighlighted) {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      for (let colIndex = 0; colIndex < board.length; colIndex++) {
        if (regions[rowIndex][colIndex] !== regionToHighlighted) continue;
        if (board[rowIndex][colIndex] !== Mark.Empty) continue;
        highlightedCells.push({row: rowIndex, col: colIndex})
      }
    }
  }

  if (highlightedCells.length === 0 && crossedCells.length === 0) return null;

  return {
    highlightedCells,
    crossedCells,
    toRemove: crossedCells,
    message: (
      <div>
        <Trans
          i18nKey="HINTS.DELETE_CROSSED_CELLS"
          components={{ p: <p />, queen: <Queen size="20" className="inline mx-1 mb-1" />}}
        />
      </div>
    ),
  };
};

export default highlightedRegionMustContainOneQueen;
