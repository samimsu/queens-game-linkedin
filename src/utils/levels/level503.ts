import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level503 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C"],
    ["D", "D", "D", "B", "B", "C", "C"],
    ["D", "D", "D", "B", "E", "E", "B"],
    ["D", "D", "D", "B", "E", "E", "B"],
    ["B", "B", "B", "B", "B", "B", "B"],
    ["F", "F", "B", "B", "G", "G", "B"],
    ["F", "F", "B", "B", "G", "G", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: chardonnay,
    D: anakiwa,
    E: celadon,
    F: altoMain,
    G: bittersweet,
  },
};

export default level503;
