import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level2 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "C"],
    ["A", "D", "D", "D", "E", "A", "A", "A", "C"],
    ["A", "A", "A", "A", "E", "A", "A", "A", "C"],
    ["A", "A", "A", "A", "E", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "F", "F", "F", "A"],
    ["A", "A", "A", "A", "A", "A", "G", "G", "G"],
    ["A", "A", "H", "H", "H", "A", "A", "A", "A"],
    ["A", "I", "I", "I", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: halfBaked,
    B: saharaSand,
    C: bittersweet,
    D: lightWisteria,
    E: chardonnay,
    F: celadon,
    G: anakiwa,
    H: altoMain,
    I: lightOrchid,
  },
};

export default level2;
