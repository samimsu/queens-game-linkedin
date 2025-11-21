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

const level570 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "D"],
    ["E", "E", "A", "B", "A", "A", "A", "D"],
    ["E", "A", "A", "B", "A", "F", "A", "D"],
    ["E", "A", "B", "B", "A", "F", "A", "A"],
    ["G", "A", "B", "A", "A", "F", "F", "A"],
    ["G", "A", "B", "A", "F", "F", "F", "A"],
    ["G", "A", "A", "A", "F", "A", "A", "A"],
    ["G", "G", "G", "G", "F", "F", "H", "H"],
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

export default level570;
