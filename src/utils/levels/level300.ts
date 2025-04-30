import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level300 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "A", "A", "A", "D", "B"],
    ["C", "C", "C", "A", "D", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "A"],
    ["E", "E", "E", "F", "E", "E", "E"],
    ["G", "E", "E", "E", "E", "E", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
};

export default level300;
