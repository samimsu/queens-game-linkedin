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

const level225 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "B", "B", "E", "C"],
    ["A", "D", "D", "D", "E", "E", "E", "C"],
    ["A", "A", "D", "F", "F", "E", "G", "C"],
    ["C", "A", "D", "F", "F", "E", "G", "C"],
    ["C", "A", "H", "H", "H", "H", "G", "C"],
    ["C", "A", "A", "G", "G", "G", "G", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: anakiwa,
    D: lightWisteria,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level225;
