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

const level547 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C"],
    ["A", "A", "B", "D", "D", "B", "B", "C"],
    ["A", "A", "D", "D", "D", "D", "E", "E"],
    ["A", "D", "D", "D", "D", "D", "D", "E"],
    ["F", "D", "D", "D", "D", "D", "D", "E"],
    ["F", "F", "D", "D", "D", "D", "G", "E"],
    ["F", "F", "F", "D", "D", "G", "G", "E"],
    ["H", "H", "H", "H", "G", "G", "G", "G"],
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

export default level547;
