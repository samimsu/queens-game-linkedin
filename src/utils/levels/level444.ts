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

const level444 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "D", "B"],
    ["A", "C", "E", "E", "F", "F", "D", "B"],
    ["B", "G", "E", "H", "H", "F", "G", "B"],
    ["B", "G", "E", "H", "H", "F", "G", "B"],
    ["B", "G", "E", "E", "E", "E", "G", "B"],
    ["B", "G", "G", "G", "G", "G", "G", "B"],
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

export default level444;
