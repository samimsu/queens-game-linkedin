import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level419 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "D", "D", "B", "B", "E", "C"],
    ["A", "B", "D", "F", "F", "E", "E", "E"],
    ["A", "B", "B", "B", "B", "B", "G", "E"],
    ["A", "A", "H", "H", "H", "B", "G", "E"],
    ["A", "A", "A", "A", "H", "B", "G", "G"],
    ["A", "B", "B", "B", "B", "B", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level419;
