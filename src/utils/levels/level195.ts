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

const level195 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "A", "D", "D", "A", "A"],
    ["B", "B", "C", "A", "E", "D", "A", "A"],
    ["B", "B", "C", "E", "E", "D", "A", "A"],
    ["B", "C", "C", "C", "D", "D", "D", "F"],
    ["B", "G", "G", "G", "F", "F", "F", "F"],
    ["H", "H", "H", "G", "G", "F", "F", "F"],
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

export default level195;
