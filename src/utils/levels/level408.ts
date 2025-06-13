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

const level408 = {
  size: 9,
  colorRegions: [
    ["A", "B", "A", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "A", "C", "D", "D", "D", "D", "C"],
    ["A", "A", "A", "E", "E", "E", "D", "D", "C"],
    ["F", "F", "A", "E", "D", "D", "D", "D", "D"],
    ["F", "F", "A", "E", "E", "E", "G", "G", "G"],
    ["F", "F", "F", "F", "F", "E", "G", "H", "H"],
    ["F", "F", "F", "E", "E", "E", "G", "G", "G"],
    ["F", "F", "F", "F", "F", "F", "G", "I", "G"],
    ["F", "F", "F", "F", "F", "F", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level408;
