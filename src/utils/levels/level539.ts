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

const level539 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "C", "B", "D", "D"],
    ["A", "A", "A", "B", "C", "B", "D", "D"],
    ["E", "E", "E", "C", "C", "D", "D", "F"],
    ["E", "E", "E", "C", "C", "D", "D", "F"],
    ["E", "G", "G", "G", "G", "F", "F", "F"],
    ["G", "G", "G", "G", "G", "F", "H", "F"],
    ["G", "G", "G", "G", "G", "F", "F", "F"],
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

export default level539;
