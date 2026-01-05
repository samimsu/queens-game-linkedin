import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level615 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C"],
    ["A", "D", "D", "A", "B", "A", "C"],
    ["A", "A", "D", "A", "A", "A", "C"],
    ["A", "A", "E", "E", "E", "A", "A"],
    ["A", "A", "A", "A", "F", "A", "A"],
    ["G", "G", "G", "A", "F", "F", "A"],
    ["A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: bittersweet,
    D: celadon,
    E: anakiwa,
    F: chardonnay,
    G: lightWisteria,
  },
  isNew: true,
};

export default level615;
