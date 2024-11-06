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

const level190 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "D"],
    ["A", "E", "E", "A", "B", "C", "C", "C", "D"],
    ["A", "E", "E", "F", "F", "F", "C", "C", "D"],
    ["A", "E", "F", "F", "F", "F", "F", "C", "D"],
    ["A", "E", "F", "F", "G", "F", "F", "C", "D"],
    ["A", "E", "F", "G", "G", "G", "F", "C", "H"],
    ["A", "E", "F", "A", "G", "C", "F", "C", "H"],
    ["A", "A", "A", "A", "I", "C", "C", "C", "H"],
    ["A", "A", "A", "A", "I", "I", "I", "H", "H"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level190;
