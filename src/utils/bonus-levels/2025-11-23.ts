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
  path: "/bonus-level/2025-11-23",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "B", "B", "B", "B", "D", "B"],
    ["A", "C", "C", "E", "C", "C", "B", "B", "D", "D", "B"],
    ["F", "C", "E", "E", "E", "C", "G", "G", "D", "H", "B"],
    ["F", "C", "C", "E", "C", "C", "G", "G", "H", "H", "B"],
    ["F", "F", "C", "C", "C", "C", "C", "G", "G", "H", "B"],
    ["I", "I", "I", "J", "J", "C", "C", "C", "G", "B", "B"],
    ["I", "J", "J", "J", "J", "J", "C", "C", "C", "B", "B"],
    ["J", "J", "K", "J", "J", "J", "J", "C", "C", "C", "B"],
    ["J", "J", "K", "K", "J", "J", "J", "J", "C", "C", "C"],
    ["J", "J", "K", "K", "K", "J", "J", "J", "J", "C", "C"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: anakiwa,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
    J: halfBaked,
    K: bittersweet,
  },
};

export default level;
