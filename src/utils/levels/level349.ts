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

const level349 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "A"],
    ["C", "B", "B", "B", "B", "B", "B", "A"],
    ["C", "C", "B", "B", "B", "B", "D", "A"],
    ["C", "E", "B", "B", "B", "B", "D", "D"],
    ["C", "E", "E", "B", "B", "F", "F", "D"],
    ["C", "E", "G", "G", "G", "G", "F", "F"],
    ["E", "E", "E", "H", "H", "H", "H", "F"],
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

export default level349;
