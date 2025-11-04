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

const level553 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "B", "E", "C", "C", "D", "D"],
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "C", "C", "F", "F"],
    ["A", "A", "B", "B", "C", "C", "G", "F"],
    ["A", "H", "H", "G", "G", "G", "G", "G"],
    ["H", "H", "H", "H", "G", "G", "G", "G"],
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
  isNew: true,
};

export default level553;
