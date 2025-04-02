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

const level337 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "B", "B", "D", "D", "D", "C"],
    ["A", "A", "E", "E", "E", "F", "D", "C"],
    ["A", "A", "E", "F", "F", "F", "D", "C"],
    ["A", "A", "G", "G", "G", "H", "D", "C"],
    ["A", "A", "G", "H", "H", "H", "D", "A"],
    ["A", "A", "A", "A", "D", "D", "D", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level337;
