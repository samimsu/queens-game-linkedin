import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level216 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "D", "C", "C", "C"],
    ["A", "A", "D", "D", "D", "E", "E"],
    ["A", "D", "D", "D", "D", "D", "E"],
    ["A", "A", "D", "D", "D", "F", "F"],
    ["G", "G", "D", "G", "D", "F", "F"],
    ["G", "G", "G", "G", "F", "F", "F"],
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

export default level216;
