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
  path: "/bonus-level/2025-10-05",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C", "D", "D", "E"],
    ["A", "A", "A", "A", "B", "C", "F", "C", "D", "C", "E"],
    ["A", "A", "A", "A", "B", "C", "F", "C", "D", "C", "E"],
    ["A", "A", "A", "A", "B", "C", "C", "C", "D", "C", "C"],
    ["C", "C", "C", "A", "C", "C", "G", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "G", "G", "C", "C", "C", "C"],
    ["G", "G", "G", "G", "G", "G", "G", "C", "C", "C", "C"],
    ["H", "H", "I", "G", "J", "G", "J", "C", "K", "C", "C"],
    ["I", "H", "I", "G", "J", "G", "J", "C", "K", "C", "K"],
    ["I", "H", "I", "G", "J", "G", "J", "C", "K", "C", "K"],
    ["I", "I", "I", "G", "J", "J", "J", "C", "K", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: turquoiseBlue,
    F: chardonnay,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
    J: halfBaked,
    K: altoMain,
  },
};

export default level;
