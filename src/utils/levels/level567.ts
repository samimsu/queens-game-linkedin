import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level567 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C"],
    ["B", "B", "B", "B", "B", "C", "C"],
    ["D", "C", "C", "B", "C", "C", "C"],
    ["D", "D", "C", "C", "C", "C", "C"],
    ["E", "D", "C", "F", "C", "C", "C"],
    ["E", "D", "F", "F", "F", "F", "F"],
    ["E", "E", "E", "F", "G", "G", "G"],
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

export default level567;
