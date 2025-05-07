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

const level372 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "C", "C", "C", "C"],
    ["D", "B", "B", "C", "C", "E", "E", "C"],
    ["D", "D", "D", "C", "E", "E", "E", "E"],
    ["D", "F", "F", "F", "F", "E", "E", "G"],
    ["F", "F", "H", "H", "F", "F", "G", "G"],
    ["F", "H", "H", "H", "H", "F", "F", "F"],
    ["F", "F", "H", "H", "F", "F", "F", "F"],
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

export default level372;
