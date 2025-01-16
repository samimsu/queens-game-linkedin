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

const level261 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "C", "C", "B", "B", "B"],
    ["A", "B", "B", "C", "B", "B", "D", "D"],
    ["B", "B", "B", "B", "B", "B", "B", "D"],
    ["E", "E", "B", "F", "F", "B", "B", "B"],
    ["E", "B", "B", "B", "F", "B", "B", "B"],
    ["E", "B", "B", "B", "B", "B", "B", "B"],
    ["E", "B", "G", "G", "B", "H", "H", "B"],
    ["E", "B", "B", "G", "B", "B", "H", "B"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level261;
