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

const level67 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "C", "C", "A", "A", "A", "B", "B"],
    ["A", "A", "C", "D", "D", "B", "B", "B", "B"],
    ["E", "A", "C", "C", "D", "F", "B", "G", "B"],
    ["E", "E", "E", "C", "D", "F", "B", "G", "B"],
    ["E", "E", "E", "C", "D", "F", "F", "G", "G"],
    ["E", "E", "E", "E", "D", "D", "F", "H", "G"],
    ["E", "E", "E", "E", "I", "F", "F", "H", "G"],
    ["I", "I", "I", "I", "I", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: halfBaked,
    C: chardonnay,
    D: lightWisteria,
    E: saharaSand,
    F: anakiwa,
    G: lightOrchid,
    H: altoMain,
    I: celadon,
  },
};

export default level67;
