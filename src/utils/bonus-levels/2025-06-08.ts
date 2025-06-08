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
  path: "/bonus-level/2025-06-08",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "C", "C", "C", "D", "D", "A"],
    ["A", "B", "E", "E", "B", "B", "C", "D", "D", "F", "F"],
    ["A", "E", "E", "E", "B", "B", "G", "G", "G", "F", "F"],
    ["A", "E", "A", "E", "E", "H", "G", "G", "F", "F", "F"],
    ["A", "A", "A", "A", "E", "H", "G", "F", "F", "F", "F"],
    ["I", "A", "A", "A", "A", "H", "F", "F", "F", "F", "I"],
    ["I", "I", "A", "A", "A", "H", "I", "I", "I", "I", "I"],
    ["I", "I", "I", "I", "I", "H", "H", "H", "I", "I", "I"],
    ["J", "I", "I", "I", "I", "I", "I", "I", "I", "I", "K"],
    ["J", "J", "J", "I", "I", "I", "I", "I", "I", "K", "K"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: turquoiseBlue,
    G: saharaSand,
    H: bittersweet,
    I: lightOrchid,
    J: halfBaked,
    K: nomad,
  },
};

export default level;
