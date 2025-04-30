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

const level309 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "D"],
    ["A", "A", "A", "B", "B", "D", "C", "D"],
    ["A", "A", "E", "E", "D", "D", "D", "D"],
    ["A", "F", "E", "D", "D", "G", "G", "G"],
    ["A", "F", "F", "H", "H", "G", "G", "G"],
    ["A", "F", "H", "H", "H", "H", "G", "G"],
    ["A", "H", "H", "H", "H", "H", "H", "G"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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

export default level309;
