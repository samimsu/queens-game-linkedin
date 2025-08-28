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

const level484 = {
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
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level484;
