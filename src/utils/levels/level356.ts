import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level356 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "C", "C", "C", "B", "A"],
    ["D", "B", "C", "E", "C", "B", "A"],
    ["D", "D", "C", "E", "C", "F", "F"],
    ["D", "D", "D", "D", "F", "F", "F"],
    ["D", "D", "D", "G", "G", "F", "F"],
  ],
  regionColors: {
    A: bittersweet,
    B: saharaSand,
    C: celadon,
    D: altoMain,
    E: anakiwa,
    F: chardonnay,
    G: lightWisteria,
  },
};

export default level356;
