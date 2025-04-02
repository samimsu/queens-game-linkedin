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

const level320 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "D", "B", "B", "B"],
    ["A", "A", "C", "C", "D", "D", "B", "B"],
    ["A", "E", "E", "E", "D", "D", "D", "B"],
    ["A", "F", "F", "F", "G", "G", "G", "B"],
    ["A", "H", "F", "F", "G", "G", "H", "B"],
    ["H", "H", "H", "F", "G", "H", "H", "B"],
    ["H", "H", "H", "H", "H", "H", "B", "B"],
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

export default level320;
