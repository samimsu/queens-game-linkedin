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
  path: "/bonus-level/2025-11-30",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "A", "A", "B", "B", "D", "B"],
    ["E", "C", "C", "C", "C", "C", "A", "D", "D", "D", "B"],
    ["E", "C", "F", "F", "F", "C", "G", "G", "D", "H", "B"],
    ["E", "C", "C", "C", "C", "C", "G", "G", "H", "H", "B"],
    ["E", "E", "C", "C", "C", "C", "C", "G", "G", "H", "B"],
    ["I", "I", "I", "I", "I", "C", "C", "C", "G", "B", "B"],
    ["I", "J", "J", "J", "J", "J", "C", "C", "C", "B", "B"],
    ["J", "J", "J", "J", "J", "J", "J", "C", "C", "C", "B"],
    ["J", "K", "J", "J", "J", "J", "J", "J", "C", "C", "C"],
    ["K", "K", "K", "J", "J", "J", "J", "J", "J", "C", "C"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: anakiwa,
    C: lightOrchid,
    D: celadon,
    E: chardonnay,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
    J: halfBaked,
    K: bittersweet,
  },
};

export default level;
