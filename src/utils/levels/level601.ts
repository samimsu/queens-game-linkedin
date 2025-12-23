import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level601 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "C", "C", "B", "D", "D", "B"],
    ["B", "C", "C", "B", "D", "D", "B"],
    ["B", "C", "C", "B", "D", "E", "B"],
    ["B", "F", "C", "E", "E", "E", "B"],
    ["F", "F", "F", "E", "E", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
};

export default level601;
