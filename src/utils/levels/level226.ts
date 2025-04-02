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

const level226 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "A", "C", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "C", "D", "D", "D", "B"],
    ["A", "C", "C", "C", "C", "D", "B", "B", "B"],
    ["A", "A", "E", "F", "F", "D", "B", "B", "B"],
    ["A", "A", "E", "F", "F", "D", "B", "B", "B"],
    ["A", "E", "E", "G", "F", "D", "B", "H", "B"],
    ["A", "I", "G", "G", "H", "H", "H", "H", "B"],
    ["I", "I", "G", "G", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level226;
