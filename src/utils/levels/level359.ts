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

const level359 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "C", "C", "C", "C", "C", "A"],
    ["A", "B", "C", "D", "D", "D", "E", "A"],
    ["A", "B", "C", "F", "D", "G", "E", "A"],
    ["A", "B", "C", "F", "F", "G", "E", "A"],
    ["A", "B", "C", "F", "G", "G", "E", "A"],
    ["A", "B", "H", "F", "G", "H", "E", "A"],
    ["B", "B", "H", "H", "H", "H", "E", "E"],
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

export default level359;
