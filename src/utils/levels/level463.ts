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

const level463 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "A", "A", "C"],
    ["D", "A", "A", "B", "B", "A", "A", "A"],
    ["D", "A", "A", "A", "B", "A", "A", "E"],
    ["F", "F", "A", "A", "A", "A", "E", "E"],
    ["F", "F", "A", "A", "A", "A", "G", "G"],
    ["A", "F", "A", "A", "A", "G", "G", "G"],
    ["A", "A", "A", "A", "H", "G", "H", "H"],
    ["A", "A", "A", "A", "H", "H", "H", "H"],
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

export default level463;
