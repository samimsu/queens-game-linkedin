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

const level400 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "A"],
    ["A", "C", "C", "C", "B", "B", "B", "A"],
    ["A", "C", "C", "C", "B", "D", "B", "A"],
    ["A", "C", "C", "C", "B", "B", "B", "A"],
    ["A", "A", "A", "E", "E", "A", "A", "A"],
    ["A", "F", "A", "A", "A", "A", "F", "A"],
    ["G", "F", "F", "F", "F", "F", "F", "H"],
    ["G", "G", "G", "H", "H", "H", "H", "H"],
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

export default level400;
