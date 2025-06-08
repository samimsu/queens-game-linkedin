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

const level404 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "D", "D", "D", "A", "B"],
    ["A", "C", "E", "E", "E", "D", "A", "B"],
    ["A", "C", "F", "G", "E", "D", "A", "B"],
    ["H", "C", "F", "G", "G", "D", "A", "B"],
    ["H", "C", "F", "F", "F", "F", "A", "B"],
    ["H", "C", "C", "C", "A", "A", "A", "B"],
    ["H", "H", "B", "B", "B", "B", "B", "B"],
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

export default level404;
