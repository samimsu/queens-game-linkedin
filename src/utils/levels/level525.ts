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

const level1 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "A", "B", "B", "B"],
    ["C", "C", "C", "C", "B", "B", "B", "B"],
    ["C", "C", "D", "D", "D", "D", "E", "B"],
    ["C", "F", "D", "D", "D", "D", "E", "E"],
    ["C", "F", "D", "D", "D", "D", "E", "E"],
    ["F", "F", "D", "D", "D", "D", "G", "E"],
    ["H", "H", "D", "D", "D", "D", "G", "G"],
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

export default level1;
