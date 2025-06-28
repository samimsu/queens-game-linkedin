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

const level423 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "C", "A"],
    ["A", "B", "B", "D", "D", "D", "E", "C", "A"],
    ["A", "F", "G", "D", "D", "D", "E", "C", "A"],
    ["A", "F", "F", "D", "D", "D", "E", "C", "A"],
    ["A", "H", "F", "F", "I", "C", "C", "C", "A"],
    ["A", "H", "H", "I", "I", "I", "A", "A", "A"],
    ["H", "H", "H", "I", "I", "I", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: chardonnay,
    D: lightOrchid,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level423;
