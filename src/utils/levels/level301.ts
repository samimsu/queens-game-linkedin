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

const level301 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "B", "B"],
    ["D", "C", "C", "C", "E", "C", "C", "B"],
    ["D", "C", "F", "C", "C", "C", "C", "B"],
    ["D", "C", "C", "C", "C", "C", "C", "B"],
    ["D", "D", "C", "C", "C", "C", "B", "B"],
    ["D", "D", "G", "C", "C", "H", "B", "B"],
    ["D", "G", "G", "C", "C", "H", "H", "H"],
  ],
  regionColors: {
    A: chardonnay,
    B: anakiwa,
    C: celadon,
    D: altoMain,
    E: lightWisteria,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level301;
