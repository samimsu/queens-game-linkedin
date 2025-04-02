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

const level247 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "D", "C", "B"],
    ["A", "E", "F", "D", "D", "D", "C", "B"],
    ["A", "E", "F", "G", "D", "D", "H", "B"],
    ["A", "E", "F", "G", "G", "D", "H", "B"],
    ["A", "E", "E", "E", "H", "H", "H", "B"],
    ["A", "A", "A", "A", "A", "B", "B", "B"],
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

export default level247;
