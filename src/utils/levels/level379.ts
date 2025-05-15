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

const level379 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "A", "E", "C", "C", "D", "D", "D"],
    ["A", "A", "E", "C", "C", "D", "D", "D"],
    ["F", "A", "E", "C", "C", "G", "H", "D"],
    ["F", "A", "E", "C", "C", "G", "H", "H"],
    ["F", "F", "E", "E", "E", "G", "G", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
  },
};

export default level379;
