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

const level179 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["C", "D", "D", "D", "E", "E", "E", "B"],
    ["C", "C", "D", "E", "E", "B", "B", "B"],
    ["C", "C", "C", "F", "G", "G", "B", "B"],
    ["C", "F", "F", "F", "G", "G", "G", "B"],
    ["C", "C", "C", "H", "H", "H", "H", "B"],
    ["H", "H", "H", "H", "H", "H", "B", "B"],
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightWisteria,
    H: nomad,
  },
};

export default level179;
