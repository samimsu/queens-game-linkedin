import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level346 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "A", "E", "B", "F", "C"],
    ["D", "D", "A", "E", "F", "F", "C"],
    ["G", "D", "A", "A", "A", "F", "C"],
    ["G", "D", "A", "A", "A", "F", "C"],
    ["D", "D", "D", "A", "F", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
};

export default level346;
