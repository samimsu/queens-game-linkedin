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

const level413 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C"],
    ["A", "D", "D", "D", "E", "B", "B", "C"],
    ["A", "D", "D", "D", "E", "E", "B", "B"],
    ["A", "D", "D", "F", "F", "E", "E", "G"],
    ["A", "D", "F", "F", "F", "H", "G", "G"],
    ["A", "F", "F", "F", "H", "H", "H", "G"],
    ["F", "F", "F", "H", "H", "H", "H", "G"],
    ["F", "F", "H", "H", "H", "H", "H", "G"],
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

export default level413;
