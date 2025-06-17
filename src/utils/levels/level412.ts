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

const level412 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "B", "B", "D", "D"],
    ["A", "A", "A", "B", "B", "E", "E", "D"],
    ["A", "A", "A", "F", "G", "E", "E", "D"],
    ["A", "A", "A", "G", "G", "E", "E", "H"],
    ["A", "G", "G", "G", "G", "G", "G", "H"],
    ["A", "A", "G", "G", "G", "G", "H", "H"],
    ["A", "A", "A", "G", "G", "H", "H", "H"],
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

export default level412;
