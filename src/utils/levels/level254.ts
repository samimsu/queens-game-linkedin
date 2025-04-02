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

const level254 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B", "A", "A"],
    ["A", "A", "B", "C", "C", "C", "B", "A", "A"],
    ["A", "A", "B", "B", "C", "B", "B", "D", "D"],
    ["A", "E", "E", "B", "B", "B", "F", "F", "D"],
    ["E", "E", "G", "G", "B", "F", "F", "D", "D"],
    ["H", "E", "E", "G", "I", "F", "D", "D", "D"],
    ["H", "E", "E", "G", "I", "F", "D", "D", "D"],
    ["H", "H", "H", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: bittersweet,
    B: saharaSand,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: lightWisteria,
    H: lightOrchid,
    I: nomad,
  },
};

export default level254;
