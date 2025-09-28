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

const level515 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "B", "B", "D", "B", "B", "C", "C"],
    ["A", "A", "A", "B", "D", "E", "C", "C", "C"],
    ["A", "A", "F", "F", "D", "E", "E", "C", "C"],
    ["A", "F", "F", "G", "D", "H", "H", "H", "C"],
    ["A", "A", "G", "G", "D", "H", "H", "C", "C"],
    ["A", "I", "G", "G", "D", "H", "H", "H", "C"],
    ["I", "I", "G", "D", "D", "D", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: saharaSand,
    D: altoMain,
    E: bittersweet,
    F: lightOrchid,
    G: nomad,
    H: lightWisteria,
    I: celadon,
  },
};

export default level515;
