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

const level603 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "D", "E", "E", "B", "C", "C", "C"],
    ["D", "D", "E", "E", "F", "C", "C", "C"],
    ["D", "D", "D", "D", "G", "G", "C", "C"],
    ["D", "D", "D", "D", "G", "G", "C", "C"],
    ["D", "D", "D", "D", "D", "D", "H", "H"],
    ["D", "D", "D", "D", "D", "D", "H", "H"],
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

export default level603;
