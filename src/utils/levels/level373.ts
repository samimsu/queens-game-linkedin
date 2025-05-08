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

const level373 = {
  size: 8,
  colorRegions: [
    ["A", "B", "A", "C", "C", "C", "C", "C"],
    ["A", "B", "A", "D", "D", "D", "D", "C"],
    ["A", "A", "A", "D", "D", "D", "C", "C"],
    ["E", "A", "E", "D", "F", "G", "G", "G"],
    ["E", "A", "E", "F", "F", "G", "H", "G"],
    ["E", "E", "E", "F", "F", "G", "H", "G"],
    ["E", "E", "E", "E", "E", "G", "H", "G"],
    ["E", "E", "E", "E", "E", "G", "H", "G"],
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

export default level373;
