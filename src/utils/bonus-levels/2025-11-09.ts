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
  path: "/bonus-level/2025-11-09",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "D"],
    ["A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D"],
    ["A", "A", "A", "A", "B", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "A", "B", "B", "B", "C", "D", "D"],
    ["A", "A", "E", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["E", "A", "E", "E", "B", "B", "B", "F", "F", "F", "G"],
    ["E", "E", "E", "B", "B", "B", "F", "F", "H", "F", "G"],
    ["I", "J", "E", "E", "B", "B", "B", "H", "H", "K", "G"],
    ["I", "J", "B", "B", "B", "H", "H", "H", "K", "K", "G"],
    ["I", "J", "J", "B", "B", "B", "G", "K", "K", "K", "G"],
    ["I", "I", "I", "B", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: lightOrchid,
    H: bittersweet,
    I: chardonnay,
    J: halfBaked,
    K: turquoiseBlue,
  },
};

export default level;
