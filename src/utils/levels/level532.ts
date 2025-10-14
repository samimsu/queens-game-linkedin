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

const level532 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C", "D"],
    ["A", "B", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "B", "E", "E", "F", "F", "D"],
    ["A", "B", "B", "E", "E", "F", "D", "D"],
    ["A", "G", "G", "G", "E", "F", "F", "D"],
    ["H", "G", "G", "G", "E", "F", "D", "D"],
    ["H", "G", "G", "E", "E", "F", "D", "D"],
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
  isNew: true,
};

export default level532;
