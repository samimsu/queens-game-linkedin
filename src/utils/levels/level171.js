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

const level171 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "B", "D", "D", "D", "B"],
    ["A", "C", "E", "E", "F", "G", "G", "D", "A"],
    ["A", "C", "E", "F", "F", "F", "G", "D", "A"],
    ["A", "C", "E", "H", "I", "I", "G", "D", "A"],
    ["A", "C", "E", "H", "H", "I", "G", "D", "A"],
    ["A", "C", "E", "E", "A", "G", "G", "D", "A"],
    ["A", "C", "C", "C", "A", "D", "D", "D", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level171;
