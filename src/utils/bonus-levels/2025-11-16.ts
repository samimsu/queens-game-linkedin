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
  path: "/bonus-level/2025-11-16",
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"],
    ["A", "B", "B", "C", "C", "D", "D", "E", "E", "E"],
    ["A", "A", "B", "A", "C", "E", "D", "E", "E", "E"],
    ["F", "A", "A", "A", "A", "E", "E", "E", "G", "G"],
    ["F", "F", "F", "G", "A", "A", "E", "E", "G", "G"],
    ["F", "F", "H", "G", "G", "I", "E", "E", "G", "G"],
    ["F", "J", "H", "H", "G", "I", "I", "E", "E", "G"],
    ["F", "J", "J", "H", "G", "G", "I", "G", "G", "G"],
    ["F", "F", "J", "H", "G", "G", "I", "G", "G", "G"],
    ["F", "F", "J", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: halfBaked,
    H: anakiwa,
    I: lightOrchid,
    J: saharaSand,
  },
  isNew: true,
};

export default level;
