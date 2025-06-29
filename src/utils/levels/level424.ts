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

const level424 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "C", "C", "C", "C", "D", "E"],
    ["B", "A", "F", "F", "F", "C", "D", "E"],
    ["A", "A", "F", "G", "G", "C", "D", "E"],
    ["A", "A", "F", "G", "G", "H", "D", "E"],
    ["A", "A", "F", "G", "G", "H", "D", "D"],
    ["A", "A", "H", "H", "H", "H", "D", "D"],
    ["A", "A", "A", "A", "D", "D", "D", "D"],
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

export default level424;
