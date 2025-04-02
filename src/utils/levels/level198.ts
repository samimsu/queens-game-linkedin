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

const level198 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "B", "B", "A"],
    ["A", "C", "C", "C", "E", "E", "B", "A"],
    ["A", "A", "F", "C", "E", "F", "A", "A"],
    ["A", "G", "F", "F", "E", "F", "H", "A"],
    ["A", "G", "F", "F", "F", "F", "H", "A"],
    ["A", "G", "G", "G", "G", "H", "H", "A"],
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
};

export default level198;
