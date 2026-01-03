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

const level612 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "C", "C", "C", "A", "A"],
    ["B", "B", "A", "A", "A", "C", "D", "A"],
    ["B", "E", "E", "F", "A", "D", "D", "A"],
    ["E", "E", "A", "F", "A", "A", "D", "A"],
    ["G", "A", "A", "F", "A", "A", "H", "H"],
    ["G", "A", "A", "F", "A", "A", "H", "H"],
    ["G", "G", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: nomad,
    B: lightWisteria,
    C: saharaSand,
    D: altoMain,
    E: chardonnay,
    F: anakiwa,
    G: bittersweet,
    H: celadon,
  },
};

export default level612;
