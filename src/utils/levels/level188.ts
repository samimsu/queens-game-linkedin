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

const level188 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "A", "C", "B"],
    ["A", "A", "A", "A", "D", "A", "C", "B"],
    ["A", "A", "A", "E", "D", "F", "C", "B"],
    ["A", "A", "A", "E", "D", "F", "C", "B"],
    ["A", "A", "G", "E", "D", "F", "C", "B"],
    ["A", "H", "G", "E", "D", "F", "C", "B"],
    ["A", "H", "G", "E", "D", "F", "C", "B"],
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
};

export default level188;
