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

const level176 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "D", "D", "A", "A", "A", "A"],
    ["A", "C", "D", "D", "D", "E", "A", "A", "A"],
    ["A", "F", "F", "F", "G", "E", "E", "A", "A"],
    ["A", "F", "F", "G", "G", "E", "E", "A", "A"],
    ["H", "H", "H", "G", "G", "A", "A", "A", "A"],
    ["A", "H", "H", "A", "A", "A", "A", "I", "I"],
    ["A", "A", "A", "A", "A", "A", "I", "I", "I"],
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

export default level176;
