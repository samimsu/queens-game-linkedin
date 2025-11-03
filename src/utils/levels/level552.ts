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

const level552 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "A", "C", "C"],
    ["A", "A", "A", "A", "A", "D", "C", "C"],
    ["A", "A", "A", "D", "D", "D", "D", "C"],
    ["A", "A", "A", "D", "D", "E", "D", "C"],
    ["A", "A", "F", "G", "G", "E", "D", "C"],
    ["A", "F", "F", "G", "G", "E", "E", "E"],
    ["H", "F", "F", "G", "G", "E", "E", "E"],
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
  isNew: true,
};

export default level552;
