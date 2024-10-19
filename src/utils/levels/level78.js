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

const level78 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "C", "C", "C", "A", "A"],
    ["A", "B", "B", "B", "D", "C", "C", "C", "C"],
    ["A", "A", "B", "D", "D", "D", "E", "C", "C"],
    ["A", "A", "A", "A", "D", "E", "E", "E", "C"],
    ["A", "F", "F", "F", "G", "C", "E", "C", "C"],
    ["A", "H", "H", "H", "G", "C", "C", "C", "C"],
    ["A", "H", "H", "H", "G", "I", "I", "I", "C"],
    ["A", "A", "H", "H", "H", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: nomad,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level78;
