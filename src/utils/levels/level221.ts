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

const level221 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "A", "C", "D", "A", "D", "A"],
    ["B", "C", "C", "C", "D", "D", "D", "A"],
    ["B", "B", "C", "E", "E", "D", "A", "A"],
    ["B", "F", "C", "F", "G", "D", "G", "A"],
    ["B", "F", "F", "F", "G", "G", "G", "A"],
    ["B", "B", "F", "H", "H", "G", "B", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "A"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level221;
