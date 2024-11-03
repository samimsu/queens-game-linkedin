import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level187 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C"],
    ["A", "A", "A", "A", "A", "D", "D", "B", "C", "C"],
    ["A", "A", "A", "E", "D", "D", "C", "B", "C", "C"],
    ["A", "A", "E", "E", "D", "C", "C", "C", "C", "C"],
    ["A", "A", "E", "E", "F", "F", "G", "C", "C", "C"],
    ["A", "A", "H", "F", "F", "G", "G", "G", "C", "G"],
    ["A", "A", "H", "F", "G", "G", "I", "G", "G", "G"],
    ["A", "H", "H", "G", "G", "J", "I", "I", "I", "I"],
    ["H", "H", "J", "J", "J", "J", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
    J: lightWisteria,
  },
};

export default level187;
