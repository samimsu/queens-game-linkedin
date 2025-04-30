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

const level279 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "C"],
    ["A", "A", "A", "D", "A", "B", "B", "C"],
    ["A", "A", "E", "E", "E", "E", "C", "C"],
    ["A", "A", "E", "F", "F", "E", "C", "C"],
    ["A", "A", "E", "F", "F", "E", "G", "C"],
    ["A", "A", "E", "E", "E", "E", "C", "C"],
    ["A", "H", "H", "C", "C", "C", "C", "C"],
    ["A", "H", "H", "C", "C", "C", "C", "C"],
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

export default level279;
