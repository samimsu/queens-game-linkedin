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

const level266 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "D", "D", "D"],
    ["E", "A", "B", "B", "C", "C", "C", "D"],
    ["E", "E", "E", "B", "C", "C", "C", "D"],
    ["E", "E", "B", "B", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
    ["F", "C", "C", "C", "C", "G", "G", "H"],
    ["F", "C", "C", "C", "C", "G", "H", "H"],
    ["F", "F", "F", "C", "C", "G", "G", "H"],
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

export default level266;
