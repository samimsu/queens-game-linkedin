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
} from "../colors";

const level = {
  path: "/bonus-level/2025-05-18",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "C", "D", "D", "B"],
    ["E", "A", "C", "C", "F", "F", "C", "C", "D", "D"],
    ["E", "E", "C", "F", "F", "F", "F", "C", "C", "C"],
    ["E", "F", "F", "F", "F", "F", "F", "F", "F", "C"],
    ["G", "G", "G", "G", "F", "F", "G", "G", "G", "G"],
    ["G", "H", "G", "G", "G", "G", "G", "G", "H", "G"],
    ["I", "H", "H", "H", "G", "G", "H", "H", "H", "J"],
    ["I", "I", "H", "H", "H", "H", "H", "H", "H", "J"],
    ["I", "I", "I", "H", "H", "H", "H", "H", "J", "J"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: lightOrchid,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: celadon,
    J: halfBaked,
  },
};

export default level;
