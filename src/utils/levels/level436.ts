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

const level436 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "A", "C", "D", "D"],
    ["E", "A", "B", "B", "B", "C", "D", "E"],
    ["E", "A", "A", "B", "B", "D", "D", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "F", "E", "E", "G", "E", "E"],
    ["E", "E", "F", "H", "H", "G", "E", "E"],
    ["E", "F", "F", "H", "H", "G", "G", "E"],
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

export default level436;
