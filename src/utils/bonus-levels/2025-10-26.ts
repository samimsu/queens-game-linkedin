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
  path: "/bonus-level/2025-10-26",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "B", "B", "C", "B", "C", "B", "D"],
    ["A", "A", "B", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "E", "E", "E", "C", "C", "D", "D"],
    ["A", "A", "E", "A", "A", "E", "E", "C", "C", "D", "D"],
    ["E", "E", "E", "A", "E", "E", "F", "C", "C", "D", "D"],
    ["E", "G", "E", "E", "E", "F", "F", "F", "D", "D", "D"],
    ["H", "G", "G", "E", "E", "F", "F", "F", "I", "D", "D"],
    ["H", "G", "G", "G", "J", "J", "F", "K", "I", "I", "D"],
    ["H", "H", "G", "G", "G", "J", "J", "K", "K", "I", "I"],
    ["H", "H", "H", "H", "G", "G", "J", "K", "K", "K", "I"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: halfBaked,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
    J: chardonnay,
    K: lightWisteria,
  },
};

export default level;
