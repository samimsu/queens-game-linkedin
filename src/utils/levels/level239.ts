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

const level239 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "A", "C", "C", "D", "D", "A", "A", "A"],
    ["A", "C", "C", "E", "E", "D", "D", "A", "A"],
    ["C", "C", "E", "E", "F", "G", "D", "D", "A"],
    ["C", "E", "E", "E", "F", "G", "D", "D", "D"],
    ["H", "E", "E", "E", "F", "G", "G", "G", "G"],
    ["H", "H", "H", "F", "F", "F", "I", "I", "G"],
    ["H", "F", "F", "F", "F", "F", "F", "I", "I"],
  ],
  regionColors: {
    A: anakiwa,
    B: saharaSand,
    C: lightWisteria,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: lightOrchid,
    H: nomad,
    I: chardonnay,
  },
};

export default level239;
