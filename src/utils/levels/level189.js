import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level189 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "D", "D", "D", "B", "B"],
    ["A", "C", "D", "B", "B", "B", "B"],
    ["C", "C", "D", "D", "D", "B", "B"],
    ["E", "E", "F", "F", "D", "B", "B"],
    ["E", "G", "D", "D", "D", "B", "B"],
    ["E", "G", "G", "G", "B", "B", "B"],
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

export default level189;
