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

const level383 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "A", "A", "C", "A"],
    ["A", "B", "B", "D", "E", "E", "C", "C", "C"],
    ["A", "B", "D", "D", "F", "E", "E", "C", "E"],
    ["A", "B", "G", "F", "F", "F", "E", "E", "E"],
    ["A", "B", "G", "G", "F", "E", "E", "H", "E"],
    ["A", "B", "B", "I", "I", "I", "H", "H", "H"],
    ["A", "I", "B", "B", "B", "I", "I", "H", "I"],
    ["A", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: chardonnay,
    D: lightOrchid,
    E: altoMain,
    F: nomad,
    G: anakiwa,
    H: bittersweet,
    I: celadon,
  },
  isNew: true,
};

export default level383;
