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

const level390 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "C"],
    ["A", "C", "B", "B", "C", "C", "D", "C", "C"],
    ["A", "C", "B", "C", "C", "D", "D", "C", "C"],
    ["C", "C", "C", "C", "C", "D", "E", "C", "C"],
    ["F", "C", "C", "C", "C", "D", "E", "E", "E"],
    ["F", "F", "C", "C", "C", "C", "C", "E", "G"],
    ["F", "F", "H", "C", "C", "C", "C", "C", "G"],
    ["H", "H", "H", "H", "C", "C", "C", "C", "G"],
    ["I", "I", "I", "I", "I", "C", "C", "G", "G"],
  ],
  regionColors: {
    A: celadon,
    B: nomad,
    C: anakiwa,
    D: saharaSand,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: chardonnay,
    I: lightWisteria,
  },
  isNew: true,
};

export default level390;
