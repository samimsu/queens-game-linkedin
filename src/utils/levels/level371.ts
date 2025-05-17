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

const level371 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "A", "A", "D", "A"],
    ["B", "A", "A", "C", "C", "D", "D", "A"],
    ["B", "E", "A", "A", "F", "F", "D", "A"],
    ["G", "E", "A", "A", "F", "F", "A", "A"],
    ["G", "E", "E", "A", "A", "H", "H", "A"],
    ["G", "A", "A", "A", "H", "H", "A", "A"],
    ["G", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: celadon,
    B: lightWisteria,
    C: nomad,
    D: saharaSand,
    E: anakiwa,
    F: bittersweet,
    G: chardonnay,
    H: altoMain,
  },
};

export default level371;
