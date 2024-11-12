import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level196 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "B", "B", "C", "D", "D"],
    ["A", "B", "B", "B", "B", "E", "E"],
    ["B", "B", "B", "B", "B", "B", "E"],
    ["B", "B", "F", "B", "B", "B", "B"],
    ["B", "F", "F", "F", "B", "B", "B"],
    ["G", "G", "G", "G", "G", "B", "B"],
  ],
  regionColors: {
    A: bittersweet,
    B: saharaSand,
    C: altoMain,
    D: celadon,
    E: anakiwa,
    F: chardonnay,
    G: lightWisteria,
  },
};

export default level196;
