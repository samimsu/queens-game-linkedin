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

const level492 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "A"],
    ["A", "C", "C", "A", "A", "B", "B", "D", "A"],
    ["A", "C", "C", "C", "A", "A", "D", "D", "A"],
    ["A", "E", "F", "A", "A", "A", "D", "D", "A"],
    ["E", "E", "F", "F", "A", "A", "A", "A", "A"],
    ["E", "E", "F", "F", "A", "G", "H", "H", "H"],
    ["A", "I", "I", "I", "A", "G", "G", "H", "H"],
    ["A", "I", "I", "A", "A", "G", "G", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: saharaSand,
    C: bittersweet,
    D: nomad,
    E: lightOrchid,
    F: celadon,
    G: chardonnay,
    H: anakiwa,
    I: lightWisteria,
  },
};

export default level492;
