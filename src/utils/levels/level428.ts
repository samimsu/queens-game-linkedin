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

const level428 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "A", "A", "B", "B", "B", "B", "A"],
    ["C", "C", "A", "A", "A", "A", "A", "A"],
    ["C", "C", "D", "D", "E", "E", "F", "A"],
    ["C", "G", "D", "D", "E", "E", "F", "A"],
    ["G", "G", "G", "G", "G", "G", "F", "F"],
    ["H", "H", "H", "H", "H", "G", "G", "G"],
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
};

export default level428;
