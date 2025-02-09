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

const level285 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "D", "D", "D", "D"],
    ["A", "A", "B", "C", "C", "C", "E", "E", "D"],
    ["A", "A", "F", "F", "C", "F", "F", "E", "D"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "D"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "D"],
    ["A", "A", "F", "F", "F", "F", "F", "D", "D"],
    ["A", "A", "G", "F", "F", "F", "D", "D", "H"],
    ["A", "G", "G", "G", "F", "I", "D", "D", "H"],
    ["A", "A", "A", "G", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level285;
