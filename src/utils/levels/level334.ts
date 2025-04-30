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

const level334 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "D", "A", "A", "A", "A", "B"],
    ["A", "C", "D", "D", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "E", "E", "E", "F", "F", "B"],
    ["A", "A", "E", "E", "E", "F", "F", "F"],
    ["A", "A", "G", "G", "E", "H", "H", "H"],
    ["G", "G", "G", "G", "E", "E", "H", "H"],
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

export default level334;
