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
} from "../colors";

const level257 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "B", "A", "A", "A", "C"],
    ["A", "A", "D", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "D", "D", "D", "A", "A", "A", "A", "A", "E"],
    ["A", "A", "F", "F", "F", "A", "A", "G", "A", "E"],
    ["H", "H", "H", "F", "H", "H", "H", "G", "E", "E"],
    ["H", "H", "H", "H", "H", "H", "H", "G", "G", "H"],
    ["H", "H", "H", "H", "H", "I", "H", "H", "H", "H"],
    ["H", "H", "H", "J", "I", "I", "H", "H", "H", "H"],
    ["H", "H", "J", "J", "J", "I", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: altoMain,
    C: lightOrchid,
    D: celadon,
    E: nomad,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: chardonnay,
    J: lightWisteria,
  },
};

export default level257;
