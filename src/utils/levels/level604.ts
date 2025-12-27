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

const level604 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "B", "C", "A"],
    ["A", "A", "B", "B", "D", "E", "B", "C", "A"],
    ["A", "F", "D", "D", "D", "D", "C", "C", "A"],
    ["A", "F", "F", "D", "G", "G", "C", "C", "A"],
    ["A", "F", "F", "D", "G", "G", "C", "A", "A"],
    ["H", "F", "F", "D", "G", "G", "A", "A", "A"],
    ["H", "H", "I", "I", "I", "I", "A", "A", "A"],
    ["H", "H", "H", "I", "I", "I", "I", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: lightWisteria,
    G: chardonnay,
    H: saharaSand,
    I: nomad,
  },
};

export default level604;
