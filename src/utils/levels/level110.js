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

const level110 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "D", "E", "C", "C", "C", "C"],
    ["A", "A", "D", "D", "E", "F", "F", "C", "C"],
    ["A", "A", "D", "E", "E", "E", "F", "F", "C"],
    ["A", "E", "E", "E", "E", "E", "E", "E", "G"],
    ["A", "H", "H", "E", "E", "E", "I", "G", "G"],
    ["A", "G", "H", "H", "E", "I", "I", "G", "G"],
    ["G", "G", "G", "G", "E", "I", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level110;
