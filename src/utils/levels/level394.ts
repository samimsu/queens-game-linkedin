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

const level394 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "C", "E", "C", "C"],
    ["A", "A", "D", "F", "C", "E", "E", "G"],
    ["A", "A", "F", "F", "C", "E", "G", "G"],
    ["A", "A", "A", "F", "H", "H", "H", "G"],
    ["A", "A", "A", "A", "A", "H", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level394;
