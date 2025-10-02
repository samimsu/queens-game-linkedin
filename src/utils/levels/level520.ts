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

const level520 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "A", "C", "D", "E", "D"],
    ["A", "B", "B", "A", "C", "D", "D", "D"],
    ["A", "A", "A", "A", "C", "D", "D", "D"],
    ["F", "A", "A", "F", "C", "C", "D", "C"],
    ["F", "F", "F", "F", "F", "C", "C", "C"],
    ["G", "F", "F", "F", "C", "C", "C", "C"],
    ["G", "G", "G", "G", "G", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "H", "H", "H"],
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

export default level520;
