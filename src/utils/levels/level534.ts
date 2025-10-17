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

const level534 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "A", "B", "E", "B", "C", "C"],
    ["A", "D", "A", "B", "E", "B", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["F", "C", "C", "C", "C", "C", "C", "G"],
    ["F", "F", "C", "C", "C", "C", "G", "G"],
    ["F", "H", "H", "H", "H", "G", "G", "G"],
    ["F", "H", "H", "G", "G", "G", "G", "G"],
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

export default level534;
