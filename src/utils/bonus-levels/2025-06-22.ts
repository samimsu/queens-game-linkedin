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
  path: "/bonus-level/2025-06-22",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A"],
    ["B", "C", "D", "D", "D", "D", "D", "D", "D", "C", "C"],
    ["B", "B", "D", "E", "E", "F", "F", "F", "G", "C", "C"],
    ["B", "H", "D", "E", "F", "F", "I", "I", "G", "H", "C"],
    ["B", "H", "D", "E", "E", "J", "I", "I", "G", "H", "C"],
    ["B", "H", "D", "J", "J", "J", "I", "K", "G", "H", "C"],
    ["B", "H", "D", "J", "K", "K", "K", "K", "G", "H", "C"],
    ["B", "H", "D", "G", "G", "G", "G", "G", "G", "H", "C"],
    ["B", "H", "H", "H", "H", "H", "H", "H", "H", "H", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: bittersweet,
    I: lightOrchid,
    J: lightWisteria,
    K: turquoiseBlue,
  },
};

export default level;
