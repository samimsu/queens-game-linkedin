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

const level409 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "C", "A"],
    ["A", "A", "B", "D", "D", "B", "C", "A"],
    ["A", "A", "D", "D", "D", "B", "C", "C"],
    ["A", "E", "E", "D", "B", "B", "C", "C"],
    ["A", "E", "F", "F", "B", "G", "G", "C"],
    ["E", "E", "F", "F", "F", "F", "G", "G"],
    ["E", "E", "E", "F", "H", "F", "F", "G"],
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
  isNew: true,
};

export default level409;
