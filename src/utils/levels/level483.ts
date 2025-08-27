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

const level483 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "D", "D", "B", "C", "C"],
    ["E", "D", "D", "D", "D", "B", "C", "C"],
    ["E", "D", "D", "D", "D", "B", "B", "B"],
    ["E", "E", "E", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "H", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: bittersweet,
    D: altoMain,
    E: lightWisteria,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
  },
};

export default level483;
