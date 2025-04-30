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

const level344 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "D", "A", "E", "E", "E", "B"],
    ["A", "A", "D", "A", "E", "B", "E", "B"],
    ["D", "D", "D", "A", "F", "B", "E", "B"],
    ["D", "A", "A", "A", "F", "B", "G", "B"],
    ["H", "A", "A", "A", "F", "B", "G", "B"],
    ["H", "H", "H", "F", "F", "B", "G", "B"],
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

export default level344;
