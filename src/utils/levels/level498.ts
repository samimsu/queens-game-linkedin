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

const level498 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "C", "C", "C", "C", "D", "A"],
    ["A", "C", "C", "C", "C", "C", "C", "D", "A"],
    ["A", "E", "F", "G", "G", "G", "G", "D", "A"],
    ["A", "E", "F", "H", "G", "H", "G", "H", "A"],
    ["A", "E", "F", "H", "H", "H", "H", "H", "A"],
    ["A", "E", "F", "H", "H", "H", "H", "H", "A"],
    ["F", "E", "F", "H", "I", "I", "I", "I", "H"],
    ["F", "F", "F", "H", "H", "H", "H", "H", "H"],
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

export default level498;
