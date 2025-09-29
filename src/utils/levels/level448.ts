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

const level448 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "B", "A", "A"],
    ["C", "A", "D", "E", "E", "E", "A", "F"],
    ["C", "A", "D", "E", "G", "E", "F", "F"],
    ["C", "A", "D", "E", "G", "E", "F", "F"],
    ["C", "C", "D", "E", "G", "E", "G", "F"],
    ["H", "G", "G", "G", "G", "G", "G", "G"],
    ["H", "G", "G", "G", "G", "G", "G", "G"],
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

export default level448;
