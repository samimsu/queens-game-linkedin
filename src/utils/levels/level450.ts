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

const level450 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "B", "A", "A"],
    ["C", "C", "C", "A", "A", "D", "D", "D"],
    ["E", "C", "F", "A", "A", "F", "D", "G"],
    ["E", "C", "F", "F", "F", "F", "D", "G"],
    ["C", "C", "C", "F", "F", "D", "D", "D"],
    ["H", "H", "F", "F", "H", "H", "H", "H"],
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

export default level450;
