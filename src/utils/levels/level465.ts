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

const level465 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "D", "D", "B"],
    ["E", "E", "A", "A", "D", "D", "F", "B"],
    ["E", "A", "A", "G", "G", "H", "F", "B"],
    ["E", "A", "G", "G", "H", "H", "F", "B"],
    ["E", "A", "G", "E", "E", "F", "F", "B"],
    ["E", "E", "E", "E", "E", "E", "E", "E"],
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

export default level465;
