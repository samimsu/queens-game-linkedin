import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level549 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "B", "C", "B"],
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "D", "B", "D", "D"],
    ["A", "A", "E", "D", "D", "D", "D", "F"],
    ["E", "E", "E", "E", "F", "F", "F", "F"],
    ["E", "G", "E", "H", "H", "F", "F", "F"],
    ["E", "E", "E", "H", "H", "H", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  isNew: true,
};

export default level549;
