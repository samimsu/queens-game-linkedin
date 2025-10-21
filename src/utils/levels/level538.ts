import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level538 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "A", "B", "B", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "C"],
    ["A", "E", "F", "F", "G", "B", "G"],
    ["E", "E", "F", "F", "G", "B", "G"],
    ["E", "E", "F", "F", "G", "B", "G"],
    ["E", "E", "E", "F", "G", "G", "G"],
  ],
  regionColors: {
    A: anakiwa,
    B: saharaSand,
    C: chardonnay,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: bittersweet,
  },
};

export default level538;
