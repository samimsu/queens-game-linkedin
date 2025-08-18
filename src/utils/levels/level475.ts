import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level475 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "C", "A"],
    ["D", "D", "D", "B", "C", "C", "A"],
    ["D", "E", "E", "E", "E", "E", "A"],
    ["D", "E", "E", "E", "E", "E", "A"],
    ["F", "E", "E", "G", "E", "E", "A"],
    ["F", "F", "E", "G", "E", "A", "A"],
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

export default level475;
