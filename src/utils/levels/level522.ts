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

const level522 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "B", "B", "C", "C", "C", "C", "D"],
    ["B", "B", "B", "E", "C", "C", "C", "D"],
    ["F", "B", "E", "E", "G", "G", "C", "C"],
    ["F", "B", "E", "E", "G", "G", "G", "G"],
    ["F", "E", "E", "G", "G", "G", "G", "G"],
    ["F", "E", "E", "G", "G", "G", "G", "H"],
    ["F", "F", "E", "E", "H", "H", "H", "H"],
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

export default level522;
