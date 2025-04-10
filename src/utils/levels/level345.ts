import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level345 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "C", "C", "B", "B"],
    ["D", "A", "E", "C", "F", "B", "G"],
    ["D", "A", "E", "C", "F", "B", "G"],
    ["D", "A", "E", "C", "B", "B", "G"],
    ["D", "A", "C", "C", "C", "B", "G"],
    ["A", "A", "A", "B", "B", "B", "B"],
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

export default level345;
