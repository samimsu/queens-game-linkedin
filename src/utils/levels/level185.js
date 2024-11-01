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

const level185 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D", "D", "D", "D"],
    ["E", "A", "B", "B", "C", "D", "D", "D", "D"],
    ["E", "A", "B", "B", "C", "F", "F", "D", "D"],
    ["A", "A", "A", "C", "C", "C", "F", "D", "D"],
    ["G", "H", "H", "I", "I", "I", "F", "D", "D"],
    ["G", "G", "H", "I", "I", "F", "F", "F", "D"],
    ["G", "G", "H", "I", "I", "G", "G", "G", "G"],
    ["G", "H", "H", "H", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: saharaSand,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: bittersweet,
    H: lightOrchid,
    I: nomad,
  },
};

export default level185;
