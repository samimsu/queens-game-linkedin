import React from "react";
import { Board, Hit, Regions } from "../interfaces";

const allOtherCellOfARegionAreRemoved = (board: Board, regions: Regions): Hit => {
    return {
        crossedCells: [],
        highlightedCells: [],
        message: <span>Tutte le altre celle in questa regione di colore sono state eliminate.\nPuoi inserire nella cella evidenziata</span>
    }
}