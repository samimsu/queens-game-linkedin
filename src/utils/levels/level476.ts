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

const level476 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A"],
    ["A", "C", "D", "D", "D", "B", "A", "A"],
    ["A", "A", "E", "D", "D", "D", "F", "A"],
    ["A", "A", "E", "D", "D", "F", "F", "A"],
    ["A", "A", "A", "G", "G", "A", "F", "A"],
    ["H", "H", "A", "A", "G", "A", "A", "A"],
    ["H", "H", "A", "A", "A", "A", "A", "A"],
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

export default level476;
