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

const level342 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "C", "A", "C", "D"],
    ["A", "B", "E", "B", "C", "A", "C", "D"],
    ["A", "B", "E", "B", "C", "C", "C", "D"],
    ["A", "F", "E", "E", "G", "H", "D", "D"],
    ["A", "F", "E", "E", "G", "H", "D", "D"],
    ["A", "F", "F", "F", "G", "G", "G", "D"],
    ["A", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: saharaSand,
    B: lightWisteria,
    C: chardonnay,
    D: nomad,
    E: altoMain,
    F: anakiwa,
    G: celadon,
    H: bittersweet,
  },
};

export default level342;
