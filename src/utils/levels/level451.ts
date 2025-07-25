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

const level451 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "D", "C", "D", "C"],
    ["A", "A", "A", "B", "D", "D", "D", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "E", "E", "E", "A", "F", "F", "A"],
    ["A", "E", "G", "E", "G", "F", "H", "H"],
    ["A", "A", "G", "G", "G", "F", "F", "H"],
    ["A", "A", "A", "A", "A", "A", "H", "H"],
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

export default level451;
