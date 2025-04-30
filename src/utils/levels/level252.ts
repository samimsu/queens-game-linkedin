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

const level252 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "C", "C", "A"],
    ["A", "A", "B", "B", "B", "B", "C", "A"],
    ["A", "B", "B", "D", "D", "B", "B", "A"],
    ["B", "B", "D", "D", "D", "E", "B", "B"],
    ["B", "F", "F", "D", "D", "E", "E", "B"],
    ["G", "F", "F", "D", "D", "H", "E", "E"],
    ["G", "G", "F", "D", "D", "H", "H", "H"],
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

export default level252;
