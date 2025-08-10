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
  path: "/bonus-level/2025-08-03",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "C", "C", "D", "B"],
    ["A", "E", "C", "F", "G", "G", "G", "H", "C", "D", "B"],
    ["A", "E", "C", "F", "F", "G", "H", "H", "C", "D", "B"],
    ["E", "E", "C", "F", "C", "G", "C", "H", "C", "D", "D"],
    ["E", "C", "C", "C", "C", "G", "C", "C", "C", "C", "D"],
    ["E", "C", "C", "C", "C", "G", "C", "C", "C", "C", "D"],
    ["E", "E", "C", "C", "C", "G", "C", "C", "C", "D", "D"],
    ["I", "E", "E", "C", "C", "G", "C", "C", "D", "D", "D"],
    ["I", "J", "J", "G", "G", "G", "G", "G", "K", "D", "D"],
    ["I", "I", "J", "K", "K", "K", "K", "K", "K", "K", "D"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: lightOrchid,
    D: turquoiseBlue,
    E: anakiwa,
    F: celadon,
    G: halfBaked,
    H: nomad,
    I: lightWisteria,
    J: saharaSand,
    K: bittersweet,
  },
};

export default level;
