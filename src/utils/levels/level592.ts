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

const level592 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A"],
    ["C", "B", "B", "D", "D", "B", "B", "A"],
    ["C", "B", "E", "D", "D", "D", "B", "F"],
    ["C", "B", "E", "E", "E", "D", "B", "F"],
    ["C", "B", "B", "E", "E", "B", "B", "F"],
    ["C", "C", "B", "B", "B", "B", "G", "G"],
    ["C", "C", "C", "H", "H", "H", "G", "G"],
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

export default level592;
