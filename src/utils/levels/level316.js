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

const level316 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "C", "C", "C", "D", "D", "A"],
    ["B", "B", "E", "E", "E", "E", "D", "A"],
    ["B", "F", "E", "G", "G", "E", "D", "D"],
    ["B", "F", "E", "G", "G", "E", "H", "D"],
    ["B", "F", "E", "G", "G", "E", "H", "D"],
    ["F", "F", "E", "E", "E", "E", "H", "H"],
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

export default level316;
