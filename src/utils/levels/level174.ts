import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level174 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "B", "B", "C", "B"],
    ["B", "B", "D", "D", "D", "B", "B"],
    ["B", "B", "D", "E", "E", "B", "B"],
    ["B", "B", "D", "E", "B", "B", "B"],
    ["B", "F", "B", "B", "B", "B", "G"],
    ["B", "B", "B", "B", "G", "G", "G"],
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

export default level174;
