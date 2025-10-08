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

const level526 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "E", "E", "E", "C"],
    ["F", "D", "B", "B", "E", "G", "E", "C"],
    ["F", "D", "D", "D", "E", "G", "C", "C"],
    ["F", "H", "H", "G", "G", "G", "C", "C"],
    ["H", "H", "H", "G", "G", "G", "C", "C"],
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
  isNew: true,
};

export default level526;
