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

const level537 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "C", "D", "D", "C", "C"],
    ["A", "B", "B", "C", "C", "C", "D", "D", "C"],
    ["A", "B", "A", "A", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "E", "E", "E"],
    ["F", "F", "A", "A", "E", "E", "E", "G", "E"],
    ["H", "F", "F", "A", "A", "E", "G", "G", "E"],
    ["H", "H", "F", "F", "A", "G", "G", "I", "I"],
    ["H", "H", "H", "A", "A", "G", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightOrchid,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: altoMain,
  },
  isNew: true,
};

export default level537;
