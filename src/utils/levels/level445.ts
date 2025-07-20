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

const level445 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "D", "D"],
    ["A", "A", "A", "C", "C", "C", "C", "C", "C"],
    ["A", "E", "A", "C", "F", "C", "C", "G", "C"],
    ["E", "E", "A", "F", "F", "F", "C", "G", "G"],
    ["A", "E", "A", "A", "F", "C", "C", "G", "A"],
    ["A", "H", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "H", "A", "I", "I", "I", "A", "A", "A"],
    ["A", "A", "A", "A", "I", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: nomad,
    I: lightWisteria,
  },
};

export default level445;
