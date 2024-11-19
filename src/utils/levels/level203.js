import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level203 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "C", "C", "D", "B"],
    ["E", "A", "A", "C", "D", "D", "B"],
    ["E", "E", "A", "D", "D", "D", "B"],
    ["F", "E", "A", "A", "D", "B", "B"],
    ["F", "F", "F", "G", "B", "B", "B"],
    ["F", "F", "F", "G", "B", "B", "B"],
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

export default level203;
