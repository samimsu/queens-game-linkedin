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

const level168 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "D", "D", "D"],
    ["A", "A", "A", "B", "C", "C", "E", "D", "A"],
    ["A", "F", "A", "A", "A", "C", "E", "A", "A"],
    ["A", "F", "F", "F", "A", "E", "E", "E", "A"],
    ["A", "F", "G", "A", "A", "H", "A", "A", "A"],
    ["A", "A", "G", "A", "A", "H", "H", "H", "A"],
    ["A", "G", "G", "G", "I", "H", "A", "A", "A"],
    ["A", "A", "A", "I", "I", "I", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
};

export default level168;
