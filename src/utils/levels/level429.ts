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

const level429 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "B", "B"],
    ["D", "D", "C", "C", "E", "C", "C", "B", "B"],
    ["D", "F", "F", "G", "G", "G", "F", "F", "B"],
    ["D", "F", "F", "G", "G", "G", "F", "F", "B"],
    ["D", "F", "F", "F", "F", "F", "F", "F", "H"],
    ["D", "F", "F", "F", "F", "F", "F", "F", "H"],
    ["D", "D", "I", "I", "I", "I", "H", "H", "H"],
    ["D", "D", "D", "D", "I", "I", "I", "I", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
  isNew: true,
};

export default level429;
