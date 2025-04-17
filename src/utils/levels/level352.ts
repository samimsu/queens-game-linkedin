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

const level352 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "A", "A", "B", "B", "E", "C", "C"],
    ["A", "D", "D", "D", "E", "E", "E", "C", "C"],
    ["A", "A", "A", "A", "F", "C", "C", "C", "C"],
    ["A", "G", "G", "A", "F", "C", "C", "C", "C"],
    ["A", "A", "G", "G", "F", "C", "H", "H", "C"],
    ["A", "A", "A", "A", "F", "H", "H", "C", "C"],
    ["A", "A", "A", "I", "I", "I", "C", "C", "C"],
    ["A", "A", "A", "A", "I", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightWisteria,
    C: lightOrchid,
    D: nomad,
    E: saharaSand,
    F: chardonnay,
    G: celadon,
    H: altoMain,
    I: anakiwa,
  },
};

export default level352;
