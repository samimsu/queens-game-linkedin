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

const level545 = {
  size: 8,
  colorRegions: [
    ["A", "B", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "C", "C", "C"],
    ["A", "D", "A", "A", "E", "E", "E", "C"],
    ["A", "D", "A", "A", "E", "F", "E", "G"],
    ["A", "D", "A", "A", "E", "F", "E", "G"],
    ["H", "D", "D", "A", "E", "E", "E", "G"],
    ["H", "H", "H", "A", "A", "A", "E", "G"],
    ["A", "A", "A", "A", "A", "A", "E", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightWisteria,
    C: anakiwa,
    D: saharaSand,
    E: nomad,
    F: altoMain,
    G: celadon,
    H: chardonnay,
  },
};

export default level545;
