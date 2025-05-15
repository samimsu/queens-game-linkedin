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

const level1 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "A", "B", "D", "D", "B"],
    ["A", "C", "A", "A", "B", "B", "D", "B"],
    ["A", "A", "A", "E", "E", "B", "B", "F"],
    ["E", "E", "E", "E", "F", "F", "F", "F"],
    ["E", "G", "E", "E", "F", "F", "H", "F"],
    ["E", "G", "G", "E", "F", "H", "H", "F"],
    ["E", "E", "E", "F", "F", "F", "F", "F"],
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
};

export default level1;
