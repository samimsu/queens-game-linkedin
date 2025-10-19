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
  path: "/bonus-level/2025-10-19",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "A", "A", "A", "D", "D", "B", "E", "E"],
    ["A", "A", "C", "C", "A", "A", "D", "B", "B", "E", "F"],
    ["C", "C", "C", "C", "C", "A", "D", "G", "G", "E", "F"],
    ["H", "H", "C", "C", "I", "A", "D", "D", "G", "E", "E"],
    ["H", "H", "C", "H", "I", "A", "A", "A", "G", "G", "G"],
    ["H", "H", "H", "H", "I", "I", "A", "A", "A", "G", "G"],
    ["J", "J", "H", "K", "K", "I", "A", "I", "A", "G", "G"],
    ["J", "H", "H", "K", "I", "I", "A", "I", "A", "G", "G"],
    ["J", "H", "H", "K", "I", "I", "I", "I", "A", "G", "G"],
    ["J", "J", "H", "K", "K", "A", "A", "A", "A", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: halfBaked,
    F: altoMain,
    G: saharaSand,
    H: anakiwa,
    I: nomad,
    J: lightOrchid,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level;
