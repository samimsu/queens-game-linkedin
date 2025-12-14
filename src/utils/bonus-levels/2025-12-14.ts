import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level1 = {
  path: "/bonus-level/2025-12-14",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "A", "D", "E", "B", "C", "E", "C"],
    ["A", "D", "D", "D", "E", "E", "E", "E", "C"],
    ["A", "F", "D", "F", "F", "F", "E", "E", "C"],
    ["G", "F", "D", "F", "F", "F", "H", "E", "C"],
    ["G", "F", "D", "F", "F", "F", "H", "E", "I"],
    ["G", "F", "F", "F", "F", "F", "H", "H", "I"],
    ["G", "F", "F", "F", "F", "F", "I", "H", "I"],
    ["G", "G", "G", "G", "G", "F", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: celadon,
    D: anakiwa,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
  isNew: true,
};

export default level1;
