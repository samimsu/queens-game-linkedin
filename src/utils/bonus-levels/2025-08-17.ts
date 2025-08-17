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
  path: "/bonus-level/2025-08-17",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "C", "A", "A", "D", "D", "A"],
    ["A", "A", "A", "B", "C", "C", "E", "E", "E", "D", "D"],
    ["A", "A", "A", "B", "B", "C", "E", "D", "E", "E", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D", "E", "D", "D"],
    ["A", "A", "A", "A", "A", "F", "D", "D", "D", "D", "D"],
    ["F", "F", "F", "F", "F", "F", "G", "G", "H", "I", "D"],
    ["F", "J", "J", "K", "F", "F", "G", "H", "H", "I", "D"],
    ["F", "J", "K", "K", "F", "F", "G", "G", "H", "I", "I"],
    ["F", "J", "J", "K", "F", "F", "G", "H", "H", "H", "F"],
    ["F", "J", "K", "K", "K", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: altoMain,
    D: lightOrchid,
    E: anakiwa,
    F: saharaSand,
    G: turquoiseBlue,
    H: nomad,
    I: celadon,
    J: halfBaked,
    K: bittersweet,
  },
  isNew: true,
};

export default level;
