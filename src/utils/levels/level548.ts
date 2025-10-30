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

const level548 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["D", "A", "B", "B", "B", "B", "C", "C"],
    ["D", "E", "E", "E", "B", "B", "B", "C"],
    ["D", "D", "E", "B", "B", "B", "C", "C"],
    ["D", "F", "G", "G", "G", "B", "C", "C"],
    ["D", "F", "F", "G", "C", "C", "C", "C"],
    ["F", "F", "F", "H", "H", "H", "C", "C"],
    ["F", "F", "F", "F", "H", "C", "C", "C"],
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

export default level548;
