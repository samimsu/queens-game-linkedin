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

const level1 = {
  size: 9,
  colorRegions: [
    ["F", "F", "B", "B", "B", "C", "C", "D", "D"],
    ["F", "F", "E", "F", "F", "C", "C", "F", "D"],
    ["F", "F", "E", "F", "F", "F", "F", "F", "D"],
    ["A", "F", "F", "F", "G", "G", "G", "F", "D"],
    ["A", "A", "A", "F", "G", "A", "G", "F", "H"],
    ["A", "I", "A", "A", "I", "A", "G", "F", "H"],
    ["A", "I", "A", "A", "I", "A", "G", "F", "H"],
    ["A", "I", "I", "I", "I", "A", "H", "H", "H"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level1;
