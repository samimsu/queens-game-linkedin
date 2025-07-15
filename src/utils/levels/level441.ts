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

const level441 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "D", "A", "A", "B"],
    ["A", "A", "E", "C", "D", "D", "A", "A"],
    ["A", "F", "E", "C", "G", "D", "H", "A"],
    ["A", "F", "E", "C", "G", "D", "H", "A"],
    ["A", "A", "E", "C", "G", "D", "A", "A"],
    ["A", "A", "A", "C", "G", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level441;
