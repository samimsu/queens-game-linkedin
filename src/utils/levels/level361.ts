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

const level361 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "D", "B"],
    ["A", "A", "C", "E", "E", "E", "C", "D", "D"],
    ["A", "A", "C", "E", "F", "E", "C", "G", "D"],
    ["A", "A", "C", "F", "F", "E", "C", "G", "D"],
    ["A", "A", "C", "E", "E", "E", "C", "G", "G"],
    ["A", "H", "C", "C", "C", "C", "C", "I", "G"],
    ["A", "H", "C", "C", "C", "C", "C", "I", "I"],
    ["H", "H", "H", "H", "H", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level361;
