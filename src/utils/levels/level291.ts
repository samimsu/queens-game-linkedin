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

const level291 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "C", "C", "D"],
    ["A", "E", "E", "B", "F", "G", "G", "G", "D"],
    ["A", "A", "E", "F", "F", "G", "D", "D", "D"],
    ["A", "A", "E", "F", "H", "G", "G", "G", "I"],
    ["A", "A", "E", "F", "H", "H", "H", "G", "I"],
    ["A", "E", "E", "E", "H", "G", "G", "G", "I"],
    ["A", "A", "I", "I", "I", "I", "I", "I", "I"],
    ["A", "A", "A", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: lightWisteria,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: lightOrchid,
    I: celadon,
  },
};

export default level291;
