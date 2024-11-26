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

const level210 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "E", "E", "E"],
    ["A", "C", "D", "D", "D", "E", "F", "E"],
    ["G", "C", "D", "D", "D", "F", "F", "E"],
    ["C", "C", "D", "D", "D", "F", "H", "E"],
    ["C", "C", "D", "D", "D", "F", "H", "H"],
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

export default level210;
