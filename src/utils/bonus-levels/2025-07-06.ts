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
  path: "/bonus-level/2025-07-06",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "A", "A", "A", "A", "B", "B"],
    ["D", "D", "D", "C", "C", "C", "C", "A", "B", "B", "B"],
    ["D", "D", "D", "C", "E", "E", "E", "A", "A", "A", "B"],
    ["D", "D", "D", "C", "E", "F", "E", "A", "G", "G", "G"],
    ["D", "H", "H", "H", "E", "F", "E", "A", "G", "I", "I"],
    ["D", "H", "H", "H", "E", "F", "E", "A", "G", "G", "G"],
    ["H", "H", "H", "H", "E", "E", "E", "A", "G", "J", "J"],
    ["K", "K", "K", "H", "H", "H", "A", "A", "G", "G", "G"],
    ["K", "K", "K", "K", "K", "H", "K", "A", "A", "A", "A"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "A", "A", "A"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: lightOrchid,
    H: halfBaked,
    I: saharaSand,
    J: lightWisteria,
    K: turquoiseBlue,
  },
};

export default level;
