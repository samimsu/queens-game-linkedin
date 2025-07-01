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

const level427 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "C", "D", "D"],
    ["A", "A", "B", "E", "E", "C", "D", "F"],
    ["G", "G", "B", "E", "C", "C", "D", "D"],
    ["G", "C", "C", "E", "E", "C", "C", "D"],
    ["G", "G", "C", "C", "E", "C", "D", "D"],
    ["H", "G", "C", "E", "E", "C", "C", "C"],
    ["G", "G", "C", "C", "C", "C", "C", "C"],
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

export default level427;
