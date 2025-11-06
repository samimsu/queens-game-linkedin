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
  path: "/bonus-level/2025-11-02",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "C", "A", "B", "B", "B"],
    ["A", "D", "D", "A", "C", "C", "C", "B", "B", "E", "A"],
    ["A", "A", "D", "D", "C", "C", "F", "F", "E", "E", "A"],
    ["A", "G", "G", "D", "D", "H", "F", "F", "E", "E", "A"],
    ["A", "G", "G", "D", "D", "H", "H", "F", "F", "A", "A"],
    ["A", "A", "G", "I", "J", "J", "H", "H", "H", "A", "A"],
    ["A", "A", "I", "I", "J", "J", "K", "H", "H", "A", "A"],
    ["A", "I", "I", "J", "J", "A", "K", "K", "A", "A", "A"],
    ["A", "I", "I", "A", "A", "A", "K", "K", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level;
