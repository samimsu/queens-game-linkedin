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

const level172 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "C", "D", "D", "D", "D"],
    ["A", "B", "C", "B", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "C", "C", "D", "D", "E", "E"],
    ["A", "F", "F", "F", "G", "G", "G", "E", "E"],
    ["A", "F", "A", "F", "G", "H", "H", "H", "E"],
    ["A", "A", "A", "I", "G", "G", "G", "H", "E"],
    ["I", "I", "I", "I", "I", "I", "H", "H", "E"],
    ["I", "I", "I", "I", "I", "I", "E", "E", "E"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
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

export default level172;
