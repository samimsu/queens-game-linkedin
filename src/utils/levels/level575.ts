import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level575 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "C", "D", "D"],
    ["A", "A", "A", "B", "C", "D", "C"],
    ["A", "A", "A", "B", "C", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "B"],
    ["E", "B", "B", "B", "B", "B", "F"],
    ["E", "G", "B", "B", "B", "F", "F"],
    ["G", "G", "G", "B", "F", "F", "F"],
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

export default level575;
