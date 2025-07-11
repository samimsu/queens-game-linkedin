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

const level437 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "A", "E", "B", "C", "C", "C"],
    ["A", "D", "A", "E", "B", "C", "F", "C"],
    ["A", "A", "A", "B", "B", "B", "F", "C"],
    ["G", "H", "H", "H", "H", "H", "F", "C"],
    ["G", "H", "H", "H", "F", "F", "F", "C"],
    ["G", "G", "G", "H", "F", "F", "F", "C"],
    ["G", "G", "G", "G", "F", "F", "F", "F"],
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

export default level437;
