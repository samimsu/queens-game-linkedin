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

const level479 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "A", "A", "A"],
    ["C", "A", "B", "D", "D", "D", "A", "A"],
    ["C", "A", "B", "B", "B", "D", "E", "A"],
    ["C", "C", "B", "D", "D", "D", "E", "E"],
    ["F", "F", "B", "B", "B", "D", "G", "E"],
    ["F", "H", "H", "D", "D", "D", "G", "G"],
    ["F", "H", "H", "G", "G", "G", "G", "G"],
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

export default level479;
