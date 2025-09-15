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
  path: "/bonus-level/2025-09-14",
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "D", "D", "D", "D"],
    ["A", "A", "A", "A", "C", "C", "C", "D", "D", "D"],
    ["E", "A", "F", "F", "C", "C", "C", "C", "D", "D"],
    ["E", "F", "F", "C", "C", "C", "C", "C", "C", "D"],
    ["E", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "G"],
    ["H", "C", "C", "C", "C", "C", "C", "G", "G", "G"],
    ["H", "H", "C", "C", "C", "C", "I", "G", "G", "J"],
    ["H", "H", "H", "C", "C", "C", "I", "J", "J", "J"],
    ["H", "H", "H", "H", "C", "C", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: celadon,
    D: anakiwa,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: lightOrchid,
    J: nomad,
  },
  isNew: true,
};

export default level;
