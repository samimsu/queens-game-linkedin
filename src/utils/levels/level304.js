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

const level304 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "D", "E", "E", "B"],
    ["A", "C", "F", "F", "D", "D", "E", "B"],
    ["A", "A", "A", "F", "F", "D", "D", "B"],
    ["G", "A", "A", "A", "F", "F", "B", "B"],
    ["G", "H", "A", "A", "A", "F", "B", "B"],
    ["G", "H", "H", "A", "A", "B", "B", "A"],
    ["G", "G", "G", "G", "A", "A", "A", "A"],
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

export default level304;
