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

const level325 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "A", "C", "C", "A", "A"],
    ["B", "B", "C", "C", "C", "C", "C", "A", "D"],
    ["B", "E", "E", "C", "F", "C", "D", "D", "D"],
    ["B", "E", "C", "C", "C", "C", "C", "D", "G"],
    ["E", "E", "C", "C", "H", "C", "C", "G", "G"],
    ["E", "I", "I", "I", "H", "G", "G", "G", "G"],
    ["I", "I", "I", "H", "H", "H", "G", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: anakiwa,
    I: lightOrchid,
  },
};

export default level325;
