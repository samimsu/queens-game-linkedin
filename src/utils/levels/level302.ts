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

const level302 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "C", "A", "A"],
    ["D", "A", "A", "B", "B", "C", "C", "A"],
    ["D", "D", "A", "B", "A", "A", "C", "A"],
    ["E", "D", "A", "F", "F", "A", "A", "A"],
    ["E", "G", "A", "A", "F", "F", "A", "A"],
    ["E", "G", "G", "A", "H", "H", "A", "A"],
    ["E", "E", "G", "H", "H", "A", "A", "A"],
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

export default level302;
