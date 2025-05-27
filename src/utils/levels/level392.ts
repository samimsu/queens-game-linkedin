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

const level392 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "A", "C", "A"],
    ["A", "B", "A", "A", "A", "A", "C", "A"],
    ["A", "B", "D", "A", "A", "E", "C", "A"],
    ["A", "A", "D", "F", "G", "E", "A", "A"],
    ["A", "A", "A", "F", "G", "A", "A", "A"],
    ["A", "A", "A", "F", "G", "H", "H", "H"],
    ["A", "A", "A", "F", "H", "H", "H", "H"],
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

export default level392;
