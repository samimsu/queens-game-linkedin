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

const level561 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "A", "A", "A"],
    ["C", "B", "D", "D", "E", "E", "E", "A"],
    ["C", "B", "B", "B", "E", "F", "E", "G"],
    ["H", "H", "H", "B", "E", "F", "E", "G"],
    ["H", "B", "B", "B", "E", "F", "E", "G"],
    ["H", "H", "H", "G", "E", "E", "E", "G"],
    ["H", "H", "H", "G", "G", "G", "G", "G"],
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

export default level561;
