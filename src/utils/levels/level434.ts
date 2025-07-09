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

const level434 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "D", "D", "D", "C", "C", "C"],
    ["A", "E", "E", "D", "F", "D", "G", "G", "C"],
    ["A", "E", "H", "D", "F", "D", "G", "C", "C"],
    ["A", "E", "E", "D", "F", "D", "G", "G", "C"],
    ["A", "A", "E", "D", "F", "D", "I", "G", "C"],
    ["A", "E", "E", "D", "F", "D", "G", "G", "C"],
    ["A", "A", "A", "D", "D", "D", "A", "A", "C"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level434;
