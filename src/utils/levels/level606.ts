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

const level606 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "D", "D", "B", "E", "E", "E", "C"],
    ["A", "A", "D", "D", "B", "E", "E", "E", "C"],
    ["A", "A", "A", "A", "A", "E", "E", "E", "C"],
    ["A", "A", "A", "A", "A", "A", "F", "F", "F"],
    ["A", "G", "G", "G", "A", "A", "F", "H", "H"],
    ["A", "I", "I", "G", "A", "A", "F", "F", "H"],
    ["A", "I", "I", "I", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
  isNew: true,
};

export default level606;
