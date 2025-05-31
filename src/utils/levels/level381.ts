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

const level381 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "C", "C", "C", "A", "D"],
    ["A", "A", "B", "E", "E", "E", "D", "D"],
    ["A", "A", "B", "E", "F", "E", "G", "G"],
    ["H", "A", "B", "E", "F", "E", "G", "H"],
    ["H", "A", "B", "E", "F", "E", "G", "H"],
    ["H", "H", "B", "B", "B", "B", "H", "H"],
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

export default level381;
