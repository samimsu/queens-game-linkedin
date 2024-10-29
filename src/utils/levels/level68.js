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

const level68 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "A", "A", "C", "A", "A"],
    ["B", "B", "B", "D", "D", "D", "C", "C", "C"],
    ["E", "E", "B", "F", "D", "G", "C", "H", "H"],
    ["H", "E", "F", "F", "D", "G", "G", "H", "H"],
    ["H", "E", "F", "I", "I", "I", "G", "G", "H"],
    ["H", "E", "F", "F", "I", "G", "G", "H", "H"],
    ["H", "F", "F", "F", "I", "G", "H", "H", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: saharaSand,
    B: celadon,
    C: anakiwa,
    D: lightWisteria,
    E: halfBaked,
    F: altoMain,
    G: lightOrchid,
    H: bittersweet,
    I: chardonnay,
  },
};

export default level68;
