import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level223 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "A", "C"],
    ["A", "A", "A", "A", "B", "A", "C"],
    ["A", "A", "A", "A", "A", "A", "C"],
    ["A", "A", "A", "A", "A", "D", "C"],
    ["A", "A", "E", "A", "A", "D", "D"],
    ["F", "F", "E", "A", "A", "G", "D"],
    ["F", "F", "E", "E", "G", "G", "G"],
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

export default level223;
