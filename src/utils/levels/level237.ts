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

const level237 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "A", "A", "B", "D", "C", "C", "C"],
    ["E", "A", "B", "B", "D", "C", "B", "B"],
    ["B", "B", "B", "B", "D", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "F", "B"],
    ["G", "B", "B", "B", "B", "H", "F", "B"],
    ["G", "B", "B", "B", "B", "H", "H", "B"],
    ["G", "G", "G", "B", "B", "B", "H", "H"],
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

export default level237;
