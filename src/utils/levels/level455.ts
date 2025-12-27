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

const level455 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "C", "C", "C", "A"],
    ["D", "B", "C", "C", "C", "C", "C", "A"],
    ["D", "B", "C", "C", "C", "C", "C", "A"],
    ["D", "D", "E", "E", "E", "E", "C", "C"],
    ["F", "D", "E", "G", "E", "E", "E", "E"],
    ["F", "D", "D", "G", "F", "F", "H", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F"],
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

export default level455;
