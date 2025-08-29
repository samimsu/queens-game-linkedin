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

const level486 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "C", "A", "D", "D", "D", "B"],
    ["A", "C", "E", "C", "A", "D", "F", "D", "B"],
    ["A", "C", "E", "C", "A", "D", "F", "D", "B"],
    ["A", "C", "C", "C", "A", "D", "D", "D", "B"],
    ["A", "A", "A", "A", "G", "A", "A", "A", "A"],
    ["A", "H", "A", "A", "A", "A", "A", "H", "A"],
    ["A", "H", "H", "A", "A", "A", "H", "H", "I"],
    ["A", "A", "H", "H", "H", "H", "H", "I", "I"],
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

export default level486;
