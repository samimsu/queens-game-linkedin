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

const level41 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "C", "A", "A", "B", "B", "B"],
    ["A", "D", "D", "C", "A", "E", "E", "E", "A"],
    ["A", "A", "D", "C", "A", "A", "A", "E", "A"],
    ["A", "A", "D", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "F", "A", "A", "G"],
    ["A", "H", "H", "H", "A", "F", "G", "G", "G"],
    ["I", "H", "A", "A", "A", "F", "F", "A", "A"],
    ["I", "I", "I", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: halfBaked,
    D: celadon,
    E: saharaSand,
    F: bittersweet,
    G: lightOrchid,
    H: anakiwa,
    I: lightWisteria,
  },
};

export default level41;
