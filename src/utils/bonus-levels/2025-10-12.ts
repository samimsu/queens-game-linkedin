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
  path: "/bonus-level/2025-10-12",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "D", "D", "D", "D"],
    ["A", "E", "A", "E", "A", "B", "C", "C", "D", "D", "D"],
    ["A", "E", "A", "E", "A", "B", "B", "C", "C", "C", "D"],
    ["A", "E", "E", "E", "A", "F", "F", "C", "D", "C", "D"],
    ["G", "E", "E", "F", "F", "F", "F", "F", "D", "C", "D"],
    ["G", "E", "G", "F", "F", "H", "F", "F", "D", "D", "D"],
    ["G", "G", "G", "F", "F", "F", "F", "F", "I", "D", "D"],
    ["G", "G", "J", "J", "F", "F", "I", "I", "I", "I", "I"],
    ["G", "G", "G", "J", "G", "G", "I", "K", "I", "K", "I"],
    ["G", "G", "G", "G", "G", "G", "I", "K", "I", "K", "I"],
    ["G", "G", "G", "G", "G", "G", "I", "K", "K", "K", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: celadon,
    D: anakiwa,
    E: altoMain,
    F: lightWisteria,
    G: halfBaked,
    H: nomad,
    I: lightOrchid,
    J: saharaSand,
    K: turquoiseBlue,
  },
};

export default level;
