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

const level393 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "C", "A", "A", "A"],
    ["A", "B", "B", "A", "C", "C", "A", "A"],
    ["A", "A", "A", "D", "D", "C", "C", "A"],
    ["A", "E", "E", "D", "D", "A", "A", "A"],
    ["A", "A", "E", "E", "F", "G", "G", "A"],
    ["A", "H", "F", "E", "F", "G", "F", "A"],
    ["H", "H", "F", "F", "F", "F", "F", "F"],
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
  isNew: true,
};

export default level393;
