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

const level374 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "E", "E", "E", "C"],
    ["A", "D", "F", "D", "E", "G", "E", "C"],
    ["A", "D", "F", "D", "E", "G", "E", "H"],
    ["A", "D", "D", "D", "E", "G", "E", "H"],
    ["A", "A", "A", "A", "A", "H", "H", "H"],
    ["A", "A", "A", "A", "A", "A", "A", "H"],
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

export default level374;
