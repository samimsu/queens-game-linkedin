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

const level231 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "C"],
    ["D", "A", "B", "B", "B", "B", "A", "C"],
    ["D", "A", "A", "E", "E", "A", "A", "C"],
    ["D", "D", "F", "F", "F", "F", "C", "C"],
    ["D", "D", "F", "F", "F", "F", "G", "G"],
    ["D", "D", "D", "H", "H", "G", "G", "G"],
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

export default level231;
