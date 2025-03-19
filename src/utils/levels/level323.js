import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level323 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "D", "E", "A", "A"],
    ["B", "C", "C", "D", "E", "E", "A"],
    ["B", "D", "D", "D", "D", "D", "A"],
    ["B", "F", "F", "D", "A", "A", "A"],
    ["G", "G", "F", "D", "A", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
  },
};

export default level323;
