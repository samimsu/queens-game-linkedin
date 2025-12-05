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

const level583 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "D", "D", "D", "B", "B", "B"],
    ["E", "E", "E", "D", "D", "D", "D", "D"],
    ["E", "E", "E", "E", "D", "F", "F", "F"],
    ["G", "G", "E", "E", "D", "F", "H", "H"],
    ["G", "G", "E", "E", "D", "F", "F", "F"],
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

export default level583;
