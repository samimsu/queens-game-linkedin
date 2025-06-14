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

const level410 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "A", "A", "D", "D", "B"],
    ["C", "C", "A", "A", "D", "D", "B", "B"],
    ["E", "E", "A", "A", "F", "F", "B", "B"],
    ["E", "G", "E", "F", "H", "F", "B", "B"],
    ["E", "G", "E", "F", "H", "F", "B", "B"],
    ["E", "E", "E", "F", "F", "F", "B", "B"],
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

export default level410;
