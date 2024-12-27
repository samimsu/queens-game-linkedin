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

const level241 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "A", "D", "B", "B", "B", "B", "C"],
    ["A", "D", "D", "E", "E", "E", "B", "C"],
    ["C", "C", "E", "E", "F", "B", "B", "C"],
    ["C", "C", "E", "F", "F", "G", "G", "C"],
    ["C", "C", "E", "C", "G", "G", "H", "C"],
    ["C", "C", "C", "C", "G", "H", "H", "C"],
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

export default level241;
