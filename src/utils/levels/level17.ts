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

const level17 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "D", "B", "B", "B", "C"],
    ["A", "B", "B", "E", "D", "D", "C", "C", "C"],
    ["A", "B", "E", "E", "F", "D", "G", "C", "C"],
    ["A", "E", "E", "F", "F", "F", "G", "G", "C"],
    ["A", "A", "E", "H", "F", "G", "G", "I", "C"],
    ["A", "A", "A", "H", "H", "H", "I", "I", "C"],
    ["A", "A", "I", "I", "H", "I", "I", "C", "C"],
    ["I", "I", "I", "I", "I", "I", "C", "C", "C"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: bittersweet,
    D: lightWisteria,
    E: halfBaked,
    F: altoMain,
    G: anakiwa,
    H: celadon,
    I: saharaSand,
  },
};

export default level17;
