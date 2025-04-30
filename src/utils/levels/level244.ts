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

const level244 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "A", "C", "C"],
    ["A", "B", "B", "B", "D", "D", "C", "C"],
    ["A", "B", "B", "B", "D", "D", "A", "A"],
    ["A", "A", "A", "E", "F", "F", "A", "A"],
    ["G", "G", "A", "A", "F", "F", "A", "A"],
    ["G", "G", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "H", "H", "H", "H", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level244;
