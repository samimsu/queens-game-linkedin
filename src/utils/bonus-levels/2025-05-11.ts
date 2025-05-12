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
  path: "/bonus-level/2025-05-11",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "C", "D", "D", "D", "D", "D", "E", "E"],
    ["A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E"],
    ["A", "B", "B", "B", "C", "C", "D", "D", "D", "E", "E"],
    ["A", "B", "F", "F", "F", "C", "F", "F", "D", "E", "E"],
    ["G", "G", "F", "F", "F", "F", "F", "F", "H", "I", "E"],
    ["G", "G", "F", "F", "F", "F", "F", "F", "H", "I", "I"],
    ["G", "G", "G", "F", "F", "F", "F", "I", "H", "I", "I"],
    ["J", "J", "J", "K", "F", "F", "I", "I", "I", "I", "I"],
    ["J", "K", "J", "K", "K", "K", "K", "I", "I", "K", "I"],
    ["J", "K", "K", "K", "K", "K", "K", "K", "I", "K", "I"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: saharaSand,
    D: halfBaked,
    E: altoMain,
    F: nomad,
    G: anakiwa,
    H: bittersweet,
    I: celadon,
    J: lightOrchid,
    K: turquoiseBlue,
  },
};

export default level;
