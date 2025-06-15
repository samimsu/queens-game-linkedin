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
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/bonus-level/2025-06-15",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C", "D", "D", "D"],
    ["E", "E", "E", "A", "B", "F", "B", "C", "C", "D", "D"],
    ["E", "F", "E", "A", "B", "F", "B", "B", "C", "F", "D"],
    ["E", "F", "E", "E", "B", "F", "B", "C", "C", "F", "G"],
    ["E", "F", "F", "E", "E", "F", "B", "C", "F", "F", "G"],
    ["E", "E", "F", "F", "E", "F", "B", "F", "F", "G", "G"],
    ["E", "E", "H", "F", "F", "F", "F", "F", "I", "I", "G"],
    ["E", "E", "H", "H", "F", "F", "F", "I", "I", "I", "G"],
    ["E", "E", "H", "H", "H", "F", "I", "I", "I", "I", "G"],
    ["J", "E", "E", "E", "E", "F", "I", "I", "I", "I", "K"],
    ["J", "J", "J", "J", "E", "F", "I", "I", "I", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: saharaSand,
    D: celadon,
    E: turquoiseBlue,
    F: bittersweet,
    G: anakiwa,
    H: halfBaked,
    I: nomad,
    J: lightOrchid,
    K: altoMain,
  },
  isNew: true,
};

export default level;
