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
  path: "/bonus-level/2025-08-10",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "A", "C", "A"],
    ["A", "A", "D", "B", "B", "B", "B", "B", "A", "C", "C"],
    ["A", "A", "D", "B", "B", "B", "B", "B", "A", "E", "C"],
    ["A", "F", "D", "D", "B", "B", "B", "G", "A", "E", "C"],
    ["F", "F", "H", "H", "H", "B", "G", "G", "E", "E", "C"],
    ["F", "F", "I", "H", "J", "B", "G", "E", "E", "C", "C"],
    ["F", "F", "I", "I", "J", "B", "G", "G", "E", "E", "C"],
    ["F", "J", "J", "J", "J", "B", "K", "K", "E", "C", "C"],
    ["F", "F", "F", "J", "B", "B", "B", "K", "E", "C", "C"],
    ["F", "F", "F", "J", "J", "J", "J", "K", "E", "E", "C"],
  ],
  regionColors: {
    A: halfBaked,
    B: bittersweet,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: celadon,
    J: lightWisteria,
    K: turquoiseBlue,
  },
};

export default level;
