import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level370 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "D", "D", "D", "E", "B"],
    ["C", "C", "C", "C", "D", "E", "E"],
    ["F", "F", "D", "D", "D", "E", "E"],
    ["F", "F", "F", "F", "D", "E", "E"],
    ["F", "F", "D", "D", "D", "E", "G"],
    ["F", "F", "F", "E", "E", "E", "G"],
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

export default level370;
