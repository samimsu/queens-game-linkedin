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

const level456 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "D"],
    ["E", "E", "E", "A", "A", "A", "A", "A"],
    ["F", "F", "G", "A", "A", "A", "A", "A"],
    ["F", "F", "G", "A", "A", "A", "A", "H"],
    ["F", "F", "G", "A", "A", "A", "A", "A"],
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

export default level456;
