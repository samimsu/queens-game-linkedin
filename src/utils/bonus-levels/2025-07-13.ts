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
  path: "/bonus-level/2025-07-13",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["C", "C", "C", "A", "A", "A", "D", "A", "B", "B", "B"],
    ["C", "C", "E", "A", "A", "A", "D", "A", "A", "B", "B"],
    ["F", "E", "E", "A", "A", "A", "D", "D", "A", "G", "G"],
    ["F", "E", "E", "E", "E", "E", "E", "E", "E", "H", "G"],
    ["F", "F", "I", "E", "E", "E", "E", "E", "E", "H", "H"],
    ["I", "I", "I", "E", "J", "J", "J", "J", "E", "H", "H"],
    ["J", "I", "E", "E", "J", "J", "J", "E", "E", "H", "H"],
    ["J", "J", "J", "J", "J", "J", "J", "K", "K", "H", "H"],
    ["J", "J", "J", "J", "J", "K", "K", "K", "H", "H", "H"],
    ["J", "J", "J", "J", "J", "J", "J", "K", "K", "K", "H"],
  ],
  regionColors: {
    A: halfBaked,
    B: chardonnay,
    C: altoMain,
    D: lightOrchid,
    E: nomad,
    F: lightWisteria,
    G: saharaSand,
    H: bittersweet,
    I: celadon,
    J: anakiwa,
    K: turquoiseBlue,
  },
};

export default level;
