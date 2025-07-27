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
  path: "/bonus-level/2025-07-27",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "A", "A", "A", "A", "A", "B", "D", "D"],
    ["C", "C", "C", "A", "A", "A", "A", "A", "B", "B", "D"],
    ["E", "E", "F", "F", "A", "A", "G", "G", "G", "G", "D"],
    ["E", "F", "F", "F", "F", "A", "G", "H", "H", "G", "D"],
    ["E", "F", "I", "I", "F", "A", "G", "H", "H", "G", "D"],
    ["E", "F", "F", "F", "F", "A", "G", "H", "J", "J", "D"],
    ["K", "K", "F", "F", "A", "A", "G", "J", "J", "J", "D"],
    ["K", "K", "K", "A", "A", "A", "A", "J", "J", "D", "D"],
    ["K", "K", "K", "A", "A", "A", "A", "A", "D", "D", "A"],
    ["K", "K", "K", "K", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: turquoiseBlue,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
    J: halfBaked,
    K: celadon,
  },
  isNew: true,
};

export default level;
