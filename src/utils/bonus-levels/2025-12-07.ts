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

const level = {
  path: "/bonus-level/2025-12-07",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "C", "C", "C", "C", "C", "C", "B"],
    ["B", "C", "D", "D", "D", "E", "E", "B"],
    ["B", "C", "D", "F", "E", "E", "G", "B"],
    ["B", "C", "D", "F", "F", "E", "G", "B"],
    ["B", "C", "H", "H", "F", "F", "G", "B"],
    ["B", "C", "H", "H", "H", "G", "G", "B"],
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

export default level;
