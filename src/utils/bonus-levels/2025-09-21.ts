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
  path: "/bonus-level/2025-09-21",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "B", "C", "D", "D", "D", "C", "B", "B", "B"],
    ["A", "E", "E", "C", "C", "D", "C", "C", "F", "F", "B"],
    ["A", "G", "E", "E", "C", "C", "C", "F", "F", "B", "B"],
    ["H", "G", "G", "E", "E", "C", "F", "F", "B", "B", "B"],
    ["H", "G", "E", "E", "I", "I", "I", "F", "F", "B", "B"],
    ["H", "E", "E", "I", "I", "J", "I", "I", "F", "F", "B"],
    ["H", "H", "I", "I", "K", "J", "J", "I", "I", "B", "B"],
    ["H", "H", "H", "I", "K", "K", "J", "I", "B", "B", "B"],
    ["H", "H", "H", "H", "K", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: turquoiseBlue,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: altoMain,
  },
  isNew: true,
};

export default level;
