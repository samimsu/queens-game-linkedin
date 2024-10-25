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

const level178 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "D"],
    ["A", "E", "E", "E", "E", "B", "B", "C", "D"],
    ["A", "E", "F", "E", "G", "G", "G", "C", "D"],
    ["A", "E", "F", "H", "G", "D", "D", "D", "D"],
    ["E", "E", "F", "H", "G", "G", "G", "I", "I"],
    ["I", "H", "F", "H", "G", "H", "H", "H", "I"],
    ["I", "H", "F", "H", "G", "H", "H", "H", "I"],
    ["I", "H", "H", "H", "H", "H", "I", "I", "I"],
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

export default level178;
