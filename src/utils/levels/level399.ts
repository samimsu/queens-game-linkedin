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

const level399 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "A", "D", "A", "B", "B", "C", "C"],
    ["A", "A", "D", "A", "B", "D", "C", "E"],
    ["A", "A", "D", "A", "D", "D", "E", "E"],
    ["D", "D", "D", "D", "D", "D", "E", "E"],
    ["F", "F", "G", "G", "E", "E", "E", "E"],
    ["F", "F", "G", "G", "E", "E", "E", "E"],
    ["F", "H", "G", "E", "E", "E", "E", "E"],
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

export default level399;
