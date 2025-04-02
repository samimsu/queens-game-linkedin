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

const level273 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "C", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "D", "E", "E", "A"],
    ["F", "F", "C", "D", "D", "E", "A", "A"],
    ["F", "F", "F", "F", "D", "G", "G", "A"],
    ["F", "F", "F", "F", "F", "F", "G", "H"],
    ["F", "F", "F", "F", "F", "F", "H", "H"],
    ["F", "F", "F", "F", "F", "F", "F", "H"],
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

export default level273;
