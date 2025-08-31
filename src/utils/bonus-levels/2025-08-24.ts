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
  path: "/bonus-level/2025-08-24",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "C", "A", "C", "D", "A", "A", "B"],
    ["A", "A", "E", "E", "C", "C", "C", "D", "D", "B", "B"],
    ["A", "A", "E", "F", "F", "F", "F", "F", "D", "B", "B"],
    ["A", "A", "E", "F", "F", "G", "F", "F", "D", "B", "B"],
    ["A", "A", "E", "F", "G", "G", "G", "F", "H", "B", "B"],
    ["A", "A", "I", "F", "F", "G", "F", "F", "H", "H", "B"],
    ["A", "A", "I", "F", "F", "F", "F", "H", "H", "B", "B"],
    ["A", "A", "I", "I", "I", "J", "J", "J", "J", "J", "B"],
    ["A", "K", "K", "K", "K", "K", "B", "B", "B", "B", "B"],
    ["A", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: lightOrchid,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: halfBaked,
    I: lightWisteria,
    J: bittersweet,
    K: turquoiseBlue,
  },
};

export default level;
