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
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "B", "D", "D", "D", "D", "B", "B"],
    ["A", "B", "B", "B", "B", "D", "D", "D", "D"],
    ["A", "E", "E", "B", "F", "D", "G", "D", "D"],
    ["A", "E", "E", "B", "B", "G", "G", "G", "D"],
    ["A", "E", "B", "B", "G", "G", "G", "G", "G"],
    ["E", "E", "H", "B", "G", "G", "G", "G", "G"],
    ["E", "H", "H", "B", "G", "G", "I", "G", "G"],
    ["H", "H", "H", "H", "G", "G", "I", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
  isNew: true,
};

export default level442;
