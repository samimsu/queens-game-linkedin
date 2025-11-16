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

const level565 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "D", "D", "D", "D", "B", "B", "C"],
    ["A", "B", "B", "D", "D", "B", "B", "E", "C"],
    ["A", "F", "B", "B", "B", "B", "E", "E", "G"],
    ["A", "F", "F", "B", "B", "B", "E", "E", "G"],
    ["A", "F", "F", "B", "B", "H", "H", "E", "G"],
    ["A", "F", "A", "A", "I", "I", "H", "H", "H"],
    ["A", "A", "A", "I", "I", "I", "I", "H", "H"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level565;
