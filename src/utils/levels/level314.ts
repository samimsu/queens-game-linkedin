import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level314 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "D", "D", "D", "A", "B"],
    ["A", "C", "D", "E", "E", "E", "B"],
    ["A", "C", "C", "C", "E", "E", "F"],
    ["A", "G", "G", "E", "E", "F", "F"],
    ["A", "G", "G", "G", "G", "A", "F"],
    ["A", "A", "A", "A", "A", "A", "F"],
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

export default level314;
