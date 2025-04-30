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

const level340 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["B", "A", "B", "B", "B", "B", "C", "B"],
    ["B", "A", "B", "B", "D", "B", "C", "B"],
    ["B", "B", "B", "D", "D", "B", "B", "B"],
    ["B", "B", "D", "D", "E", "E", "B", "B"],
    ["B", "B", "F", "E", "E", "G", "B", "B"],
    ["B", "F", "F", "H", "E", "G", "G", "B"],
    ["F", "F", "H", "H", "H", "H", "G", "G"],
  ],
  regionColors: {
    A: chardonnay,
    B: nomad,
    C: lightWisteria,
    D: saharaSand,
    E: bittersweet,
    F: anakiwa,
    G: celadon,
    H: altoMain,
  },
};

export default level340;
