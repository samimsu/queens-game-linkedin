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
  path: "/bonus-level/2025-06-29",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "C", "D", "A", "A", "E", "E", "F"],
    ["G", "G", "A", "B", "C", "D", "A", "E", "E", "F", "F"],
    ["G", "B", "B", "B", "C", "D", "A", "H", "E", "I", "F"],
    ["G", "J", "J", "J", "C", "D", "D", "H", "I", "I", "F"],
    ["G", "J", "J", "J", "C", "J", "J", "H", "I", "I", "I"],
    ["G", "G", "J", "J", "J", "J", "J", "H", "I", "K", "I"],
    ["G", "G", "G", "G", "G", "J", "K", "H", "I", "K", "I"],
    ["G", "G", "J", "J", "J", "J", "K", "I", "I", "K", "I"],
    ["G", "G", "G", "K", "K", "K", "K", "K", "K", "K", "I"],
    ["G", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: bittersweet,
    B: anakiwa,
    C: chardonnay,
    D: lightOrchid,
    E: altoMain,
    F: lightWisteria,
    G: halfBaked,
    H: nomad,
    I: celadon,
    J: saharaSand,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level;
