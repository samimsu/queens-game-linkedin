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

const level432 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "A", "E", "B", "C", "C", "C"],
    ["A", "F", "D", "D", "E", "E", "B", "B", "G", "C"],
    ["A", "F", "F", "E", "E", "E", "B", "B", "G", "G"],
    ["A", "H", "F", "F", "E", "E", "G", "B", "G", "G"],
    ["A", "H", "I", "I", "E", "E", "G", "B", "G", "G"],
    ["H", "H", "I", "I", "E", "E", "G", "G", "G", "G"],
    ["J", "H", "H", "I", "E", "E", "G", "G", "G", "G"],
    ["J", "H", "E", "E", "E", "E", "E", "E", "G", "G"],
    ["J", "J", "J", "J", "J", "J", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: lightOrchid,
    G: halfBaked,
    H: altoMain,
    I: nomad,
    J: saharaSand,
  },
};

export default level432;
