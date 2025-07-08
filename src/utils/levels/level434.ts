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

const level1 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "I", "I", "I", "I"],
    ["A", "A", "B", "F", "F", "F", "I", "I", "I"],
    ["A", "E", "E", "F", "D", "F", "G", "G", "I"],
    ["A", "E", "H", "F", "D", "F", "G", "I", "I"],
    ["A", "E", "E", "F", "D", "F", "G", "G", "I"],
    ["A", "A", "E", "F", "D", "F", "C", "G", "I"],
    ["A", "E", "E", "F", "D", "F", "G", "G", "I"],
    ["A", "A", "A", "F", "F", "F", "A", "A", "I"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level1;
