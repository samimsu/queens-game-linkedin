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

const level351 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "A", "B", "D", "D", "B"],
    ["A", "A", "C", "C", "D", "D", "E", "B"],
    ["A", "A", "A", "F", "D", "E", "E", "B"],
    ["A", "A", "G", "G", "G", "G", "E", "B"],
    ["A", "A", "G", "H", "H", "G", "E", "B"],
    ["E", "E", "G", "G", "G", "G", "E", "B"],
    ["E", "E", "E", "E", "E", "E", "E", "B"],
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

export default level351;
