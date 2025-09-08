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
  path: "/bonus-level/2025-09-07",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "C", "C", "A"],
    ["A", "A", "A", "A", "B", "C", "C", "C", "C", "C", "C"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
    ["D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "D"],
    ["D", "E", "F", "F", "F", "F", "G", "G", "G", "E", "D"],
    ["D", "E", "F", "H", "H", "H", "I", "I", "G", "E", "D"],
    ["D", "E", "F", "H", "J", "J", "J", "I", "G", "E", "D"],
    ["D", "E", "F", "H", "J", "K", "J", "I", "G", "E", "D"],
    ["D", "E", "F", "K", "K", "K", "K", "K", "D", "E", "D"],
    ["D", "D", "D", "K", "K", "K", "K", "K", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: anakiwa,
    C: chardonnay,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: halfBaked,
    I: nomad,
    J: lightOrchid,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level;
