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

const level442 = {
  size: 9,
  colorRegions: [
    ["A", "A", "F", "F", "F", "F", "F", "F", "F"],
    ["A", "C", "F", "I", "I", "I", "I", "F", "F"],
    ["A", "F", "F", "F", "F", "I", "I", "I", "I"],
    ["A", "E", "E", "F", "B", "I", "G", "I", "I"],
    ["A", "E", "E", "F", "F", "G", "G", "G", "I"],
    ["A", "E", "F", "F", "G", "G", "G", "G", "G"],
    ["E", "E", "H", "F", "G", "G", "G", "G", "G"],
    ["E", "H", "H", "F", "G", "G", "D", "G", "G"],
    ["H", "H", "H", "H", "G", "G", "D", "G", "G"],
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
  isNew: true,
};

export default level442;
