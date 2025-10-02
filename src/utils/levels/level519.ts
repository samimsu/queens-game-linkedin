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

const level519 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "D", "D", "B", "B", "C", "C"],
    ["A", "B", "D", "E", "E", "C", "C", "C"],
    ["A", "A", "D", "E", "F", "F", "C", "C"],
    ["A", "G", "D", "D", "F", "C", "C", "C"],
    ["A", "G", "D", "H", "F", "F", "C", "C"],
    ["A", "G", "D", "H", "F", "C", "C", "C"],
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

export default level519;
