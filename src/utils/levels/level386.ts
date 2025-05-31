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

const level386 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "A", "A", "A", "D", "E", "B", "C", "C"],
    ["A", "A", "D", "D", "D", "E", "E", "E", "C"],
    ["A", "A", "F", "D", "G", "H", "E", "C", "C"],
    ["A", "F", "F", "F", "H", "H", "H", "C", "C"],
    ["A", "A", "I", "F", "H", "C", "C", "C", "C"],
    ["A", "I", "I", "I", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "I", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level386;
