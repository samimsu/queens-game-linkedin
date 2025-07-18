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

const level443 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "A", "C", "C", "B", "D", "B", "E"],
    ["C", "C", "C", "C", "B", "D", "D", "E"],
    ["C", "C", "F", "F", "F", "E", "E", "E"],
    ["C", "G", "G", "C", "F", "F", "E", "C"],
    ["C", "G", "G", "C", "C", "H", "H", "C"],
    ["C", "C", "C", "C", "C", "H", "H", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
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

export default level443;
