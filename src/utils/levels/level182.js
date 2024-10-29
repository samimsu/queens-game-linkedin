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

const level182 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "B", "D", "D", "B", "E", "C"],
    ["B", "B", "D", "D", "D", "B", "E", "E"],
    ["B", "D", "D", "D", "E", "E", "E", "E"],
    ["B", "D", "D", "D", "F", "F", "F", "G"],
    ["B", "B", "D", "D", "F", "B", "F", "G"],
    ["H", "B", "B", "F", "F", "B", "G", "G"],
    ["H", "H", "B", "B", "B", "B", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: nomad,
    H: chardonnay,
  },
};

export default level182;
