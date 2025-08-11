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

const level467 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "D", "D", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "D", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "D", "D"],
    ["A", "E", "C", "C", "E", "C", "C", "E", "D"],
    ["F", "E", "E", "E", "E", "E", "E", "E", "D"],
    ["F", "G", "G", "E", "G", "E", "G", "G", "H"],
    ["F", "I", "G", "G", "G", "G", "G", "H", "H"],
    ["F", "I", "I", "I", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: nomad,
    B: altoMain,
    C: lightOrchid,
    D: saharaSand,
    E: chardonnay,
    F: celadon,
    G: bittersweet,
    H: lightWisteria,
    I: anakiwa,
  },
};

export default level467;
