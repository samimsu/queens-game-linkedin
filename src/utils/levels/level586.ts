import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level586 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "C"],
    ["D", "D", "A", "D", "D", "A", "B", "B", "C"],
    ["A", "D", "D", "D", "A", "A", "B", "C", "C"],
    ["A", "A", "A", "A", "A", "E", "B", "B", "C"],
    ["A", "F", "A", "A", "A", "E", "E", "B", "G"],
    ["A", "F", "F", "A", "E", "E", "E", "G", "G"],
    ["A", "A", "F", "H", "E", "I", "I", "I", "G"],
    ["A", "F", "F", "H", "I", "I", "H", "I", "I"],
    ["A", "F", "H", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: lightOrchid,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level586;
