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

const level201 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "A", "A", "C", "A"],
    ["A", "A", "A", "B", "B", "D", "D", "C", "A"],
    ["A", "A", "A", "B", "B", "D", "D", "C", "E"],
    ["A", "F", "F", "F", "G", "D", "C", "C", "E"],
    ["H", "F", "G", "G", "G", "D", "C", "E", "E"],
    ["H", "F", "F", "F", "G", "I", "E", "E", "I"],
    ["H", "H", "H", "H", "G", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
};

export default level201;
