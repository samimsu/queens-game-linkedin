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

const level401 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "D", "D", "D", "C"],
    ["A", "D", "D", "D", "D", "D", "D", "C"],
    ["A", "E", "D", "D", "D", "D", "D", "F"],
    ["E", "E", "D", "D", "D", "D", "D", "F"],
    ["E", "G", "D", "D", "D", "D", "D", "F"],
    ["E", "G", "D", "D", "D", "H", "D", "F"],
    ["G", "G", "G", "H", "H", "H", "H", "F"],
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

export default level401;
