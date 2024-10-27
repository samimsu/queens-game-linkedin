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

const level180 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "D", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "B"],
    ["A", "A", "C", "F", "D", "D", "E", "E"],
    ["A", "A", "A", "F", "F", "F", "E", "G"],
    ["A", "H", "A", "A", "F", "G", "G", "G"],
    ["A", "H", "H", "A", "A", "A", "G", "A"],
    ["H", "H", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: bittersweet,
    B: saharaSand,
    C: lightWisteria,
    D: chardonnay,
    E: anakiwa,
    F: nomad,
    G: celadon,
    H: altoMain,
  },
};

export default level180;
