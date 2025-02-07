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

const level283 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "B", "B", "B"],
    ["A", "D", "D", "D", "C", "B", "B", "B"],
    ["A", "D", "A", "C", "C", "C", "B", "B"],
    ["A", "A", "A", "A", "C", "E", "E", "E"],
    ["A", "F", "A", "A", "C", "G", "E", "G"],
    ["F", "F", "A", "A", "C", "G", "G", "G"],
    ["F", "F", "F", "F", "F", "G", "H", "G"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level283;
