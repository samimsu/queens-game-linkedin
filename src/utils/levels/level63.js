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

const level63 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "A", "A", "D", "D", "E", "E", "E", "C"],
    ["A", "A", "A", "D", "E", "E", "F", "E", "E"],
    ["A", "A", "E", "E", "E", "F", "F", "F", "E"],
    ["A", "A", "E", "F", "E", "F", "F", "E", "E"],
    ["A", "A", "E", "F", "F", "F", "E", "E", "G"],
    ["A", "A", "E", "F", "F", "F", "E", "G", "G"],
    ["A", "H", "E", "E", "E", "E", "E", "I", "G"],
    ["H", "H", "H", "H", "H", "H", "I", "I", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: celadon,
    F: altoMain,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level63;
