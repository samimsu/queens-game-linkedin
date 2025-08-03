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

const level459 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "C", "C", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "B", "B"],
    ["D", "C", "C", "E", "E", "C", "C", "B"],
    ["D", "C", "C", "F", "F", "C", "C", "B"],
    ["D", "D", "F", "F", "F", "F", "F", "B"],
    ["D", "F", "F", "G", "H", "F", "B", "B"],
    ["D", "D", "G", "G", "H", "H", "B", "B"],
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

export default level459;
