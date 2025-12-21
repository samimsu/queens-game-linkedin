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

const level600 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["E", "A", "A", "B", "B", "C", "C", "D"],
    ["E", "E", "A", "E", "B", "F", "F", "F"],
    ["E", "E", "E", "E", "B", "G", "F", "F"],
    ["E", "H", "H", "E", "E", "G", "G", "F"],
    ["E", "E", "H", "H", "E", "E", "G", "G"],
    ["E", "E", "E", "H", "H", "E", "E", "G"],
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

export default level600;
