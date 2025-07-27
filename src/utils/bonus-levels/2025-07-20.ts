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
  path: "/bonus-level/2025-07-20",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "A", "C"],
    ["A", "A", "A", "A", "B", "D", "E", "E", "E", "C"],
    ["A", "F", "F", "F", "B", "D", "D", "E", "C", "C"],
    ["A", "A", "F", "G", "B", "D", "A", "E", "A", "C"],
    ["A", "A", "F", "G", "G", "G", "A", "A", "A", "C"],
    ["A", "A", "H", "G", "A", "A", "A", "I", "I", "I"],
    ["A", "A", "H", "H", "A", "J", "A", "A", "I", "A"],
    ["A", "A", "H", "A", "A", "J", "A", "A", "I", "A"],
    ["A", "A", "A", "A", "J", "J", "J", "A", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: anakiwa,
    C: lightWisteria,
    D: halfBaked,
    E: bittersweet,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: altoMain,
    J: lightOrchid,
  },
};

export default level;
