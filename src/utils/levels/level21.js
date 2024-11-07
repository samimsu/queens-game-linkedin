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

const level21 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "C", "D", "D", "B", "B"],
    ["A", "A", "A", "C", "C", "D", "D", "A", "A"],
    ["A", "A", "A", "A", "E", "E", "A", "A", "A"],
    ["A", "A", "F", "F", "E", "E", "A", "A", "A"],
    ["A", "A", "F", "F", "A", "A", "G", "G", "A"],
    ["A", "H", "H", "I", "I", "A", "G", "G", "A"],
    ["A", "H", "H", "I", "I", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: bittersweet,
    D: halfBaked,
    E: lightOrchid,
    F: anakiwa,
    G: celadon,
    H: lightWisteria,
    I: chardonnay,
  },
};

export default level21;
