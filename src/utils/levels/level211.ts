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

const level211 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "D", "D", "D", "A"],
    ["B", "C", "E", "E", "E", "E", "D", "A"],
    ["B", "C", "C", "E", "E", "F", "F", "A"],
    ["B", "B", "F", "E", "E", "F", "A", "A"],
    ["B", "B", "F", "G", "G", "F", "A", "A"],
    ["H", "H", "F", "F", "F", "F", "A", "A"],
    ["H", "A", "A", "A", "A", "A", "A", "A"],
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

export default level211;
