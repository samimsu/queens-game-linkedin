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

const level563 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "D", "B"],
    ["A", "C", "E", "F", "F", "F", "F", "D", "B"],
    ["A", "D", "E", "E", "E", "F", "F", "D", "B"],
    ["A", "D", "E", "E", "G", "H", "F", "D", "B"],
    ["A", "D", "I", "I", "G", "H", "H", "D", "B"],
    ["A", "D", "I", "G", "G", "H", "H", "D", "B"],
    ["A", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightOrchid,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
  isNew: true,
};

export default level563;
