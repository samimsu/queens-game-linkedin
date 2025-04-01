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

const level333 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C"],
    ["A", "A", "A", "B", "D", "D", "D", "C"],
    ["A", "B", "A", "B", "D", "D", "D", "C"],
    ["B", "B", "B", "B", "E", "E", "D", "C"],
    ["B", "F", "F", "G", "C", "C", "C", "C"],
    ["B", "F", "F", "G", "C", "H", "H", "C"],
    ["B", "F", "F", "F", "C", "H", "H", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
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

export default level333;
