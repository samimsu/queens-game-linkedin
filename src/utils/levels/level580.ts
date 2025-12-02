import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level580 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "A", "C", "D", "E", "B"],
    ["A", "A", "A", "C", "D", "E", "B"],
    ["A", "A", "F", "C", "D", "E", "B"],
    ["A", "G", "F", "C", "D", "E", "B"],
    ["A", "G", "F", "C", "D", "E", "B"],
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
  isNew: true,
};

export default level580;
