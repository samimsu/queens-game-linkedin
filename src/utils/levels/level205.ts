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

const level205 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "A", "A"],
    ["A", "A", "A", "A", "B", "B", "C", "C", "A"],
    ["A", "D", "D", "A", "A", "A", "A", "A", "A"],
    ["E", "E", "D", "D", "D", "A", "A", "F", "A"],
    ["A", "E", "E", "E", "G", "G", "A", "F", "A"],
    ["A", "H", "H", "G", "G", "I", "F", "F", "A"],
    ["A", "A", "H", "H", "I", "I", "F", "A", "A"],
    ["A", "A", "A", "A", "I", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: anakiwa,
  },
};

export default level205;
