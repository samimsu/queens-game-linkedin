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

const level406 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "C", "D", "D", "D"],
    ["A", "B", "B", "B", "C", "D", "C", "D"],
    ["A", "A", "A", "B", "C", "D", "C", "D"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "E", "C", "C", "C", "C", "C", "C"],
    ["F", "E", "F", "C", "C", "G", "G", "G"],
    ["F", "E", "F", "C", "C", "H", "H", "G"],
    ["F", "F", "F", "C", "C", "G", "G", "G"],
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

export default level406;
