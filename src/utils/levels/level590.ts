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

const level590 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "A", "A", "B", "D", "D", "D", "B"],
    ["A", "A", "A", "B", "D", "D", "D", "B"],
    ["B", "B", "B", "B", "D", "D", "D", "B"],
    ["B", "E", "F", "F", "B", "B", "B", "B"],
    ["B", "E", "E", "E", "B", "G", "G", "G"],
    ["B", "E", "E", "E", "B", "H", "H", "G"],
    ["B", "B", "B", "B", "B", "G", "G", "G"],
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

export default level590;
