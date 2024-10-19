import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level167 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "C", "D", "D", "A", "A"],
    ["B", "B", "E", "E", "C", "F", "D", "D", "A"],
    ["A", "E", "E", "C", "C", "F", "G", "A", "A"],
    ["A", "A", "A", "C", "A", "F", "G", "G", "A"],
    ["H", "A", "A", "A", "A", "F", "F", "G", "A"],
    ["H", "H", "A", "I", "A", "A", "F", "G", "A"],
    ["A", "H", "A", "I", "I", "A", "A", "G", "A"],
    ["A", "A", "A", "A", "I", "A", "A", "A", "A"],
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
    I: lightOrchid,
  },
};

export default level167;
