import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level433 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["B", "A", "C", "C", "C", "A", "B"],
    ["B", "A", "C", "C", "C", "D", "B"],
    ["B", "E", "E", "F", "D", "D", "B"],
    ["B", "E", "G", "G", "G", "D", "B"],
    ["B", "E", "G", "G", "G", "D", "B"],
    ["B", "B", "B", "B", "B", "B", "B"],
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

export default level433;
