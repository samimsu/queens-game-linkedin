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

const level311 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "E", "E", "B"],
    ["A", "C", "D", "F", "F", "F", "E", "B"],
    ["A", "C", "D", "F", "D", "D", "E", "G"],
    ["A", "C", "D", "F", "F", "D", "E", "G"],
    ["H", "C", "D", "D", "D", "D", "E", "G"],
    ["H", "C", "C", "E", "E", "E", "E", "G"],
    ["H", "H", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightWisteria,
  },
};

export default level311;
