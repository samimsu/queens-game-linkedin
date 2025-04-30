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

const level365 = {
  size: 9,
  colorRegions: [
    ["C", "B", "B", "A", "A", "A", "A", "A", "A"],
    ["C", "B", "B", "A", "A", "D", "D", "E", "A"],
    ["C", "C", "C", "A", "A", "D", "D", "E", "A"],
    ["A", "A", "A", "A", "A", "D", "E", "E", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "F", "G", "G", "A", "A", "A", "A", "A"],
    ["A", "F", "F", "G", "A", "A", "H", "H", "H"],
    ["A", "F", "G", "G", "A", "A", "H", "I", "H"],
    ["A", "A", "A", "A", "A", "A", "H", "I", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level365;
