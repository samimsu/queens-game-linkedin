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

const level227 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "D", "D", "B", "B", "E", "E", "E", "B"],
    ["C", "C", "D", "B", "F", "F", "F", "E", "B"],
    ["C", "G", "D", "F", "F", "E", "E", "E", "B"],
    ["G", "G", "D", "F", "H", "H", "H", "E", "B"],
    ["G", "D", "D", "D", "H", "E", "E", "E", "B"],
    ["G", "I", "I", "I", "I", "I", "I", "B", "B"],
    ["I", "I", "I", "I", "I", "I", "B", "B", "B"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: celadon,
    D: anakiwa,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightWisteria,
    I: lightOrchid,
  },
};

export default level227;
