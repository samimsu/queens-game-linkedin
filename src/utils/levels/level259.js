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

const level259 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "C", "C", "B", "B", "D"],
    ["A", "A", "B", "B", "C", "B", "D", "D"],
    ["B", "B", "B", "B", "C", "B", "D", "B"],
    ["B", "E", "B", "B", "B", "B", "B", "B"],
    ["E", "E", "E", "B", "B", "F", "F", "B"],
    ["B", "B", "B", "B", "F", "F", "B", "B"],
    ["G", "B", "B", "B", "B", "B", "B", "B"],
    ["G", "G", "G", "B", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightWisteria,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level259;
