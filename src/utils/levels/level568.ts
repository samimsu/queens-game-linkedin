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

const level568 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "B", "D", "D"],
    ["A", "C", "C", "C", "C", "C", "C", "D"],
    ["E", "C", "C", "C", "C", "C", "C", "D"],
    ["E", "F", "F", "C", "C", "C", "C", "D"],
    ["E", "E", "F", "G", "C", "C", "C", "H"],
    ["E", "E", "F", "G", "G", "G", "H", "H"],
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

export default level568;
