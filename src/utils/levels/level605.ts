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

const level605 = {
  size: 8,
  colorRegions: [
    ["G", "G", "H", "H", "H", "F", "F", "C"],
    ["G", "H", "H", "H", "F", "F", "C", "C"],
    ["H", "H", "H", "F", "F", "E", "C", "D"],
    ["H", "H", "F", "F", "E", "E", "D", "D"],
    ["H", "F", "F", "E", "E", "D", "D", "B"],
    ["F", "F", "F", "E", "E", "E", "A", "B"],
    ["F", "F", "F", "E", "E", "A", "A", "B"],
    ["E", "E", "E", "E", "A", "A", "B", "B"],
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

export default level605;
