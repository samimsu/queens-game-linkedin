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

const level233 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "D", "D", "B", "B", "B", "B"],
    ["A", "C", "A", "A", "D", "D", "B", "B", "B"],
    ["A", "A", "A", "A", "D", "D", "D", "B", "B"],
    ["E", "F", "F", "A", "D", "D", "D", "D", "B"],
    ["E", "E", "E", "E", "D", "D", "D", "G", "B"],
    ["E", "H", "E", "E", "D", "D", "I", "G", "G"],
    ["H", "H", "E", "D", "D", "I", "I", "G", "G"],
    ["H", "E", "E", "E", "E", "E", "I", "I", "G"],
  ],
  regionColors: {
    A: saharaSand,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: lightWisteria,
    H: nomad,
    I: chardonnay,
  },
};

export default level233;
