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

const level597 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "A", "D", "D", "B", "B"],
    ["A", "C", "C", "A", "D", "D", "B", "B"],
    ["A", "A", "A", "E", "B", "B", "B", "B"],
    ["A", "F", "F", "G", "H", "H", "B", "B"],
    ["F", "F", "G", "G", "G", "H", "H", "B"],
    ["F", "B", "B", "B", "B", "B", "H", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
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

export default level597;
