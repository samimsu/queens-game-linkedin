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

const level296 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "C", "E", "F", "F", "F", "D", "D", "D"],
    ["A", "C", "E", "E", "E", "F", "D", "D", "D"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "G"],
    ["A", "H", "H", "H", "H", "H", "H", "C", "G"],
    ["A", "H", "H", "H", "H", "I", "I", "C", "G"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "G"],
    ["A", "A", "A", "A", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
};

export default level296;
