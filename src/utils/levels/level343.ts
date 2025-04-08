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

const level343 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "A", "B", "B", "C", "C", "E", "C"],
    ["D", "A", "A", "B", "B", "E", "E", "E"],
    ["D", "D", "F", "F", "B", "G", "E", "G"],
    ["D", "D", "D", "F", "B", "G", "G", "G"],
    ["D", "D", "D", "F", "F", "H", "H", "G"],
    ["D", "D", "D", "D", "D", "D", "H", "G"],
    ["D", "D", "D", "D", "D", "D", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level343;
