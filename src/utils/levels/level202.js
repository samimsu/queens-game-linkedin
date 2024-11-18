import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level202 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "A", "B", "B", "B", "C"],
    ["A", "D", "D", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "E", "E", "F"],
    ["G", "B", "B", "B", "E", "F", "F"],
    ["G", "G", "B", "B", "F", "F", "F"],
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

export default level202;
