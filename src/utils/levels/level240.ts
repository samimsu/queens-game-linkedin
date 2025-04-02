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

const level240 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "C", "C", "C", "C", "A", "B"],
    ["A", "B", "D", "E", "E", "C", "A", "B"],
    ["A", "A", "D", "E", "E", "F", "A", "A"],
    ["A", "A", "D", "E", "E", "F", "A", "A"],
    ["A", "G", "D", "G", "H", "F", "H", "A"],
    ["A", "G", "G", "G", "H", "H", "H", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level240;
