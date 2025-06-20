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

const level415 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "D", "C", "B"],
    ["E", "C", "F", "D", "G", "G", "B", "B"],
    ["E", "C", "F", "F", "C", "C", "C", "B"],
    ["E", "C", "F", "F", "F", "F", "C", "B"],
    ["E", "C", "C", "C", "C", "C", "C", "H"],
    ["E", "E", "H", "H", "H", "H", "H", "H"],
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

export default level415;
