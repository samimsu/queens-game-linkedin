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

const level303 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "A", "A", "B", "E", "E", "E", "C"],
    ["D", "A", "B", "B", "B", "B", "E", "B"],
    ["D", "F", "F", "B", "B", "B", "B", "B"],
    ["D", "D", "F", "F", "B", "B", "B", "B"],
    ["D", "D", "F", "D", "B", "B", "G", "B"],
    ["D", "D", "D", "D", "D", "G", "G", "H"],
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

export default level303;
