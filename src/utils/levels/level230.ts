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

const level230 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["C", "C", "C", "C", "C", "C", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "D", "D", "D", "D", "D", "B"],
    ["B", "B", "E", "B", "B", "F", "B", "B"],
    ["B", "B", "E", "B", "B", "B", "B", "B"],
    ["G", "B", "E", "B", "B", "B", "B", "B"],
    ["G", "B", "E", "H", "H", "H", "B", "B"],
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

export default level230;
