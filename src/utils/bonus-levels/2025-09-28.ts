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
  path: "/bonus-level/2025-09-28",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "A", "A", "A", "C", "A", "A", "D"],
    ["A", "B", "B", "E", "A", "E", "C", "C", "F", "D", "D"],
    ["A", "G", "B", "E", "E", "E", "C", "F", "F", "H", "D"],
    ["A", "G", "G", "G", "G", "H", "C", "F", "H", "H", "D"],
    ["A", "A", "A", "G", "H", "H", "H", "F", "H", "H", "H"],
    ["A", "A", "G", "G", "I", "I", "H", "H", "H", "J", "H"],
    ["A", "A", "G", "I", "I", "K", "H", "K", "J", "J", "H"],
    ["A", "G", "G", "G", "I", "K", "K", "K", "J", "H", "H"],
    ["A", "A", "G", "G", "G", "G", "H", "H", "J", "H", "H"],
    ["G", "G", "G", "G", "G", "G", "G", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: turquoiseBlue,
    C: lightWisteria,
    D: celadon,
    E: lightOrchid,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: altoMain,
    J: halfBaked,
    K: chardonnay,
  },
};

export default level;
