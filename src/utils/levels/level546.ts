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

const level546 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "C", "C", "C", "A"],
    ["B", "D", "D", "D", "C", "E", "C", "F"],
    ["B", "B", "B", "D", "C", "C", "C", "F"],
    ["B", "B", "D", "D", "G", "G", "C", "F"],
    ["H", "H", "H", "D", "C", "C", "C", "F"],
    ["H", "H", "H", "D", "F", "F", "F", "F"],
    ["H", "H", "H", "H", "F", "F", "F", "F"],
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

export default level546;
