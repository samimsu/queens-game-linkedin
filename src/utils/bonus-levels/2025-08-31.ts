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
  path: "/bonus-level/2025-08-31",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "D", "B", "B", "B", "C", "C"],
    ["A", "E", "B", "B", "D", "D", "D", "B", "B", "C", "C"],
    ["A", "E", "B", "F", "F", "F", "D", "D", "B", "G", "C"],
    ["H", "H", "H", "F", "F", "F", "D", "B", "B", "G", "I"],
    ["H", "H", "H", "F", "F", "F", "B", "B", "I", "I", "I"],
    ["H", "H", "H", "H", "H", "B", "B", "I", "I", "I", "H"],
    ["H", "H", "H", "H", "H", "B", "H", "H", "I", "H", "H"],
    ["H", "H", "H", "H", "H", "B", "H", "H", "H", "H", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "J", "J", "J"],
    ["H", "H", "H", "H", "H", "K", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: turquoiseBlue,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: lightWisteria,
    J: nomad,
    K: celadon,
  },
};

export default level;
