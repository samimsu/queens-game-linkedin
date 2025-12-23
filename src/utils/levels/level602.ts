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

const level602 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "B", "B"],
    ["A", "A", "A", "A", "C", "C", "B", "B"],
    ["A", "A", "A", "A", "C", "C", "C", "D"],
    ["E", "E", "E", "E", "F", "F", "G", "G"],
    ["E", "E", "E", "E", "F", "F", "G", "G"],
    ["E", "E", "E", "E", "H", "H", "H", "H"],
    ["E", "E", "E", "E", "H", "H", "H", "H"],
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

export default level602;
