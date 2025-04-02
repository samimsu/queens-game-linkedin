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

const level115 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "A", "C", "C", "C", "C", "C", "B", "A"],
    ["A", "A", "C", "C", "D", "D", "C", "E", "A"],
    ["A", "A", "C", "F", "F", "D", "C", "E", "A"],
    ["A", "G", "G", "G", "F", "C", "C", "E", "A"],
    ["I", "H", "H", "G", "C", "C", "C", "E", "A"],
    ["I", "I", "H", "G", "A", "A", "A", "A", "A"],
    ["I", "I", "I", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: saharaSand,
    I: bittersweet,
  },
};

export default level115;
