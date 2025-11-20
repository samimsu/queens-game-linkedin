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

const level569 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "D", "C", "C", "E", "A"],
    ["B", "B", "C", "D", "D", "C", "E", "A"],
    ["C", "C", "C", "C", "C", "C", "E", "E"],
    ["F", "C", "C", "C", "C", "C", "C", "C"],
    ["F", "C", "C", "G", "C", "C", "H", "C"],
    ["F", "F", "C", "G", "G", "C", "H", "H"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
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

export default level569;
