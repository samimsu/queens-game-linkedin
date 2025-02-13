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

const level289 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "C"],
    ["A", "A", "D", "A", "A", "A", "E", "B", "C"],
    ["A", "D", "D", "D", "A", "E", "E", "E", "C"],
    ["A", "A", "D", "F", "F", "F", "E", "C", "C"],
    ["A", "A", "A", "F", "F", "F", "C", "C", "A"],
    ["A", "A", "G", "F", "F", "F", "H", "A", "A"],
    ["A", "G", "G", "G", "I", "H", "H", "H", "A"],
    ["A", "A", "G", "A", "I", "I", "H", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: anakiwa,
  },
};

export default level289;
