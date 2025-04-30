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

const level322 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "C", "D", "C", "C", "C"],
    ["E", "A", "A", "B", "B", "D", "F", "F", "C"],
    ["E", "E", "A", "A", "A", "D", "F", "F", "C"],
    ["E", "G", "G", "A", "A", "A", "F", "A", "A"],
    ["E", "E", "G", "A", "H", "A", "A", "A", "A"],
    ["E", "E", "G", "G", "H", "I", "I", "A", "A"],
    ["E", "E", "E", "E", "H", "I", "I", "A", "A"],
    ["E", "E", "E", "E", "E", "I", "A", "A", "A"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightWisteria,
    C: nomad,
    D: chardonnay,
    E: lightOrchid,
    F: anakiwa,
    G: celadon,
    H: altoMain,
    I: saharaSand,
  },
};

export default level322;
