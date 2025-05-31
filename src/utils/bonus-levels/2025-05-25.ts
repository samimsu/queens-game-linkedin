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
  path: "/bonus-level/2025-05-25",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "C", "A", "A", "A", "A", "C"],
    ["A", "A", "A", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "D", "C", "D", "D", "D", "D", "C"],
    ["A", "D", "E", "E", "D", "D", "D", "F", "F", "D", "G"],
    ["A", "D", "E", "E", "D", "G", "D", "F", "F", "D", "G"],
    ["A", "D", "D", "D", "D", "G", "D", "D", "D", "D", "G"],
    ["A", "A", "A", "A", "H", "G", "G", "G", "G", "G", "G"],
    ["I", "I", "I", "I", "H", "H", "H", "H", "H", "J", "J"],
    ["I", "K", "K", "K", "K", "H", "H", "H", "H", "H", "J"],
    ["K", "K", "K", "H", "H", "H", "H", "H", "H", "H", "J"],
  ],
  regionColors: {
    A: halfBaked,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightOrchid,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: altoMain,
    J: lightWisteria,
    K: turquoiseBlue,
  },
};

export default level;
