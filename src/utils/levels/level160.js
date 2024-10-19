import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level160 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "A"],
    ["C", "B", "B", "B", "B", "B", "A"],
    ["C", "C", "D", "D", "D", "D", "A"],
    ["C", "C", "E", "F", "F", "D", "A"],
    ["G", "G", "E", "E", "F", "D", "A"],
    ["G", "G", "E", "F", "F", "D", "A"],
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

export default level160;
