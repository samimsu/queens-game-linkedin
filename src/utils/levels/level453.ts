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

const level453 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "C", "C"],
    ["A", "A", "E", "A", "B", "D", "D", "D", "C"],
    ["A", "F", "E", "E", "B", "D", "G", "D", "C"],
    ["A", "F", "F", "E", "B", "G", "G", "G", "C"],
    ["A", "H", "F", "E", "B", "I", "C", "C", "C"],
    ["A", "H", "H", "H", "B", "I", "I", "C", "C"],
    ["A", "A", "A", "A", "B", "I", "I", "I", "C"],
    ["A", "A", "A", "A", "B", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level453;
