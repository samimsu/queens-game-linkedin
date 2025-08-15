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

const level471 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "C", "B", "B"],
    ["A", "A", "D", "A", "A", "C", "E", "B"],
    ["A", "D", "D", "F", "C", "C", "E", "E"],
    ["G", "G", "F", "F", "F", "C", "E", "E"],
    ["G", "G", "G", "F", "F", "F", "E", "E"],
    ["G", "G", "G", "G", "F", "F", "E", "E"],
    ["G", "G", "G", "G", "G", "G", "H", "E"],
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

export default level471;
