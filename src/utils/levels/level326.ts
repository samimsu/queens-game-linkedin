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

const level326 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "B", "D", "D", "D", "B", "C", "C"],
    ["A", "E", "E", "E", "D", "F", "F", "F", "C"],
    ["A", "A", "E", "G", "D", "D", "F", "H", "C"],
    ["A", "A", "E", "G", "G", "G", "F", "H", "H"],
    ["A", "A", "E", "I", "I", "G", "F", "H", "A"],
    ["A", "E", "E", "E", "I", "F", "F", "F", "A"],
    ["A", "A", "A", "A", "I", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightOrchid,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
};

export default level326;
