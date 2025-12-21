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
  path: "/bonus-level/2025-12-21",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A"],
    ["A", "B", "B", "C", "C", "B", "B", "D"],
    ["A", "B", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "C", "C", "E", "E", "B", "F"],
    ["G", "B", "B", "E", "E", "B", "B", "F"],
    ["G", "G", "B", "B", "B", "B", "F", "F"],
    ["G", "G", "G", "G", "H", "H", "H", "H"],
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
  isNew: true,
};

export default level;
