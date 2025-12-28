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
  path: "/bonus-level/2025-12-28",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "A", "A", "A", "A", "A"],
    ["A", "A", "C", "C", "C", "B", "C", "C", "C", "A", "A"],
    ["D", "C", "C", "E", "C", "C", "C", "F", "C", "C", "A"],
    ["D", "C", "E", "E", "E", "C", "F", "F", "F", "C", "A"],
    ["D", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A"],
    ["D", "C", "C", "G", "G", "G", "G", "G", "C", "C", "A"],
    ["D", "H", "C", "C", "C", "C", "C", "C", "C", "A", "A"],
    ["D", "H", "H", "C", "C", "C", "C", "C", "I", "J", "A"],
    ["D", "H", "H", "H", "H", "K", "I", "I", "I", "J", "A"],
    ["D", "D", "H", "K", "K", "K", "K", "I", "J", "J", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: celadon,
    D: saharaSand,
    E: halfBaked,
    F: chardonnay,
    G: lightOrchid,
    H: nomad,
    I: anakiwa,
    J: altoMain,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level;
