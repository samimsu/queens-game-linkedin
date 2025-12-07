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

const level585 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["D", "A", "A", "A", "B", "B", "C", "C"],
    ["D", "A", "A", "A", "A", "B", "B", "B"],
    ["D", "D", "D", "A", "A", "A", "E", "B"],
    ["F", "F", "D", "D", "E", "E", "E", "B"],
    ["F", "F", "G", "D", "E", "E", "H", "H"],
    ["F", "G", "G", "D", "D", "D", "H", "H"],
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

export default level585;
