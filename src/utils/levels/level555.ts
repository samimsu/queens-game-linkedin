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

const level555 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "A", "D", "D", "D", "C", "C", "C"],
    ["A", "A", "A", "D", "D", "C", "C", "C"],
    ["E", "A", "A", "F", "F", "C", "C", "C"],
    ["E", "E", "E", "F", "F", "F", "C", "C"],
    ["E", "G", "G", "G", "C", "C", "C", "C"],
    ["H", "H", "G", "G", "C", "C", "C", "C"],
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

export default level555;
