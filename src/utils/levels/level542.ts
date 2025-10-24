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

const level542 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "A", "A", "A", "A", "C"],
    ["A", "A", "B", "B", "D", "A", "A", "C", "C"],
    ["A", "B", "B", "D", "D", "E", "C", "C", "F"],
    ["A", "E", "D", "D", "E", "E", "E", "E", "F"],
    ["E", "E", "E", "E", "E", "E", "E", "G", "F"],
    ["E", "E", "E", "H", "E", "E", "G", "G", "F"],
    ["E", "E", "H", "H", "I", "G", "G", "F", "F"],
    ["E", "H", "H", "I", "I", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
  isNew: true,
};

export default level542;
