import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level609 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "D", "D", "C", "C"],
    ["A", "B", "B", "D", "E", "E", "C"],
    ["A", "A", "B", "D", "E", "C", "C"],
    ["A", "B", "B", "D", "E", "E", "C"],
    ["F", "D", "D", "D", "E", "E", "C"],
    ["F", "F", "G", "G", "E", "E", "C"],
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

export default level609;
