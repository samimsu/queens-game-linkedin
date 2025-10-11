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

const level527 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A"],
    ["A", "A", "B", "C", "C", "C", "A", "A"],
    ["A", "A", "B", "D", "D", "C", "A", "A"],
    ["E", "A", "F", "D", "D", "C", "G", "G"],
    ["E", "E", "F", "D", "D", "C", "G", "G"],
    ["E", "E", "F", "F", "F", "C", "G", "G"],
    ["E", "E", "E", "H", "H", "H", "H", "G"],
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

export default level527;
