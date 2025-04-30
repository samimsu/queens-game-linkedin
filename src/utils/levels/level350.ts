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

const level350 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "B"],
    ["A", "A", "D", "D", "D", "E", "B", "B"],
    ["A", "A", "F", "F", "E", "E", "E", "E"],
    ["A", "A", "A", "A", "G", "G", "E", "E"],
    ["A", "A", "A", "G", "G", "G", "H", "E"],
    ["A", "G", "G", "G", "G", "G", "H", "E"],
    ["A", "A", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: anakiwa,
    D: lightWisteria,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level350;
