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

const level533 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "B", "D", "B", "C", "C"],
    ["B", "A", "B", "B", "B", "B", "C", "C"],
    ["B", "B", "B", "E", "E", "B", "B", "C"],
    ["B", "F", "B", "E", "E", "E", "B", "C"],
    ["B", "B", "B", "B", "E", "B", "B", "C"],
    ["G", "G", "G", "B", "B", "B", "C", "C"],
    ["G", "G", "G", "H", "H", "H", "C", "C"],
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

export default level533;
