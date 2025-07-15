import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level440 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "D", "B", "B", "C"],
    ["A", "A", "D", "D", "D", "C", "C"],
    ["A", "A", "D", "D", "D", "C", "C"],
    ["A", "A", "D", "D", "D", "C", "E"],
    ["A", "F", "D", "D", "D", "E", "E"],
    ["F", "F", "F", "G", "E", "E", "E"],
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

export default level440;
