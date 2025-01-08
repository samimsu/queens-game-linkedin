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

const level253 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "D", "D", "D", "D", "E", "C"],
    ["A", "B", "D", "E", "E", "E", "E", "F"],
    ["A", "A", "D", "D", "D", "D", "F", "F"],
    ["G", "G", "D", "H", "H", "H", "H", "F"],
    ["G", "G", "D", "H", "G", "G", "G", "G"],
    ["G", "G", "D", "D", "D", "D", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G"],
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

export default level253;
