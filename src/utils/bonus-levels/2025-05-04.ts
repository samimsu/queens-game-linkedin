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
  path: "/bonus-level/2025-05-04",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "D", "D", "D", "D", "D"],
    ["A", "A", "B", "B", "C", "E", "F", "F", "F", "D", "D"],
    ["A", "A", "B", "E", "C", "E", "F", "E", "F", "D", "D"],
    ["G", "G", "B", "E", "C", "E", "F", "E", "F", "D", "D"],
    ["G", "E", "B", "E", "E", "E", "E", "E", "F", "E", "D"],
    ["H", "E", "E", "E", "E", "E", "E", "E", "E", "E", "D"],
    ["H", "E", "E", "E", "E", "E", "E", "E", "E", "E", "I"],
    ["H", "H", "E", "E", "E", "E", "E", "E", "E", "I", "I"],
    ["H", "H", "H", "E", "E", "E", "E", "E", "J", "I", "I"],
    ["H", "H", "H", "H", "E", "E", "E", "K", "J", "J", "J"],
    ["H", "H", "H", "H", "H", "H", "K", "K", "J", "J", "J"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: turquoiseBlue,
    I: chardonnay,
    J: lightWisteria,
    K: nomad,
  },
};

export default level;
