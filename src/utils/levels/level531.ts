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

const level531 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "A", "C", "B", "B"],
    ["A", "A", "A", "D", "A", "C", "E", "B"],
    ["A", "A", "F", "D", "A", "C", "B", "B"],
    ["G", "A", "A", "D", "A", "C", "B", "G"],
    ["G", "G", "A", "D", "A", "C", "G", "G"],
    ["H", "G", "G", "G", "G", "G", "G", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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

export default level531;
