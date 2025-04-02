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

const level260 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "E", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "E", "E", "C"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "G", "G", "G", "H", "A", "A", "A", "A"],
    ["F", "G", "G", "H", "H", "A", "A", "A", "A"],
    ["F", "F", "F", "I", "H", "A", "A", "A", "A"],
    ["F", "I", "I", "I", "H", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: lightWisteria,
    C: bittersweet,
    D: anakiwa,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level260;
