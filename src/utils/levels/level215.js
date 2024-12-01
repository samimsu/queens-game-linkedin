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

const level215 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "C", "C", "C", "B", "B", "B"],
    ["A", "B", "B", "C", "D", "C", "B", "B", "B"],
    ["A", "E", "B", "D", "D", "D", "F", "F", "B"],
    ["A", "E", "D", "D", "D", "D", "D", "F", "B"],
    ["A", "E", "E", "G", "D", "G", "F", "F", "B"],
    ["A", "A", "A", "G", "D", "G", "B", "B", "B"],
    ["H", "I", "I", "G", "G", "G", "B", "B", "B"],
    ["H", "H", "I", "I", "I", "I", "I", "B", "B"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightWisteria,
    I: nomad,
  },
};

export default level215;
