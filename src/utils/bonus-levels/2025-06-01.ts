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
  path: "/bonus-level/2025-06-01",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "D", "B", "C", "C", "C", "C", "E", "C"],
    ["A", "B", "D", "D", "B", "B", "B", "E", "E", "E", "E"],
    ["A", "B", "F", "F", "F", "B", "F", "F", "F", "E", "E"],
    ["A", "F", "F", "G", "F", "F", "F", "H", "F", "F", "E"],
    ["A", "F", "G", "G", "G", "F", "H", "H", "H", "F", "E"],
    ["A", "F", "F", "G", "F", "F", "F", "H", "F", "F", "E"],
    ["A", "I", "F", "F", "F", "J", "F", "F", "F", "I", "I"],
    ["A", "I", "I", "K", "J", "J", "J", "J", "I", "I", "I"],
    ["A", "I", "I", "K", "J", "J", "I", "I", "I", "I", "I"],
    ["A", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: halfBaked,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
    J: altoMain,
    K: lightWisteria,
  },
};

export default level;
