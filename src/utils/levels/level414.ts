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

const level414 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "D"],
    ["A", "E", "E", "B", "C", "D", "D", "D"],
    ["A", "A", "E", "B", "C", "C", "C", "C"],
    ["F", "F", "B", "B", "B", "C", "C", "C"],
    ["F", "F", "F", "G", "H", "G", "C", "C"],
    ["F", "F", "F", "G", "H", "G", "C", "C"],
    ["F", "F", "F", "G", "G", "G", "C", "C"],
    ["F", "F", "F", "F", "F", "G", "C", "C"],
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

export default level414;
