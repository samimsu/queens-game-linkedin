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

const level416 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "A", "A", "A"],
    ["A", "C", "C", "C", "C", "E", "E", "A", "A"],
    ["A", "C", "C", "C", "C", "E", "E", "A", "A"],
    ["A", "A", "F", "F", "A", "A", "A", "A", "A"],
    ["A", "A", "F", "F", "G", "G", "G", "A", "A"],
    ["H", "H", "I", "I", "G", "G", "G", "A", "A"],
    ["H", "H", "I", "I", "G", "G", "G", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: celadon,
    C: bittersweet,
    D: nomad,
    E: anakiwa,
    F: saharaSand,
    G: chardonnay,
    H: altoMain,
    I: lightWisteria,
  },
};

export default level416;
