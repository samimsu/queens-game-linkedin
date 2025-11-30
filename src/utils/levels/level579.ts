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

const level579 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "A", "A", "A", "E", "E", "E"],
    ["F", "D", "D", "A", "A", "A", "E", "A"],
    ["F", "D", "G", "G", "A", "A", "A", "A"],
    ["F", "H", "H", "G", "G", "A", "A", "A"],
    ["F", "H", "H", "H", "A", "A", "A", "A"],
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

export default level579;
