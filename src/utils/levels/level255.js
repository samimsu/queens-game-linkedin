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

const level255 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "E", "E", "B", "B", "D", "C"],
    ["A", "D", "D", "E", "E", "D", "D", "C"],
    ["A", "D", "D", "D", "E", "D", "D", "F"],
    ["A", "D", "D", "D", "D", "D", "D", "F"],
    ["A", "D", "G", "G", "G", "G", "D", "F"],
    ["H", "G", "G", "G", "G", "G", "G", "F"],
    ["H", "H", "H", "H", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightWisteria,
  },
};

export default level255;
