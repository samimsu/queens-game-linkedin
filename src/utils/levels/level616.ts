import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level616 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "D"],
    ["E", "A", "B", "B", "B", "C", "D"],
    ["E", "A", "A", "B", "C", "C", "D"],
    ["E", "E", "B", "B", "B", "D", "D"],
    ["F", "E", "B", "G", "B", "D", "D"],
    ["F", "F", "B", "B", "B", "F", "D"],
    ["F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: anakiwa,
    D: saharaSand,
    E: altoMain,
    F: bittersweet,
    G: lightWisteria,
  },
  isNew: true,
};

export default level616;
