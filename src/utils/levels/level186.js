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

const level186 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "A", "B", "B", "B", "B", "B", "D", "C", "C"],
    ["E", "A", "A", "F", "B", "B", "D", "D", "C", "G"],
    ["E", "E", "A", "F", "F", "B", "D", "H", "C", "G"],
    ["E", "E", "I", "I", "F", "B", "H", "H", "C", "G"],
    ["E", "E", "E", "I", "F", "B", "H", "J", "J", "G"],
    ["E", "E", "E", "I", "F", "B", "H", "J", "G", "G"],
    ["E", "E", "E", "I", "I", "B", "J", "J", "G", "G"],
    ["E", "E", "E", "E", "I", "B", "J", "G", "G", "G"],
    ["E", "E", "E", "E", "E", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: anakiwa,
    C: lightOrchid,
    D: celadon,
    E: halfBaked,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
    J: altoMain,
  },
};

export default level186;
