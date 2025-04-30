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

const level321 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "C", "C", "D", "B", "B"],
    ["B", "A", "C", "C", "B", "D", "D", "B"],
    ["B", "B", "B", "B", "B", "B", "E", "B"],
    ["B", "F", "G", "G", "B", "E", "E", "B"],
    ["B", "F", "B", "G", "B", "H", "B", "B"],
    ["B", "F", "B", "H", "H", "H", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: anakiwa,
    B: nomad,
    C: chardonnay,
    D: lightWisteria,
    E: celadon,
    F: saharaSand,
    G: bittersweet,
    H: altoMain,
  },
};

export default level321;
