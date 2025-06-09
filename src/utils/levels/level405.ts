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

const level405 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "A", "C", "A"],
    ["B", "B", "D", "E", "E", "F", "C", "C"],
    ["G", "D", "D", "E", "E", "F", "F", "G"],
    ["G", "D", "E", "E", "E", "E", "E", "G"],
    ["G", "G", "G", "E", "E", "G", "G", "G"],
    ["H", "G", "G", "G", "G", "G", "G", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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

export default level405;
