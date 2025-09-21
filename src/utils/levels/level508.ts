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

const level508 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "B", "A", "A", "A", "A"],
    ["A", "C", "B", "B", "B", "A", "D", "D", "A"],
    ["A", "C", "C", "C", "B", "A", "D", "A", "A"],
    ["A", "C", "E", "C", "E", "D", "D", "D", "A"],
    ["A", "F", "E", "E", "E", "G", "G", "A", "A"],
    ["A", "F", "F", "F", "E", "G", "H", "H", "H"],
    ["A", "F", "A", "F", "G", "G", "G", "H", "I"],
    ["A", "A", "A", "A", "A", "A", "H", "H", "I"],
  ],
  regionColors: {
    A: altoMain,
    B: nomad,
    C: lightWisteria,
    D: bittersweet,
    E: chardonnay,
    F: lightOrchid,
    G: anakiwa,
    H: celadon,
    I: saharaSand,
  },
};

export default level508;
