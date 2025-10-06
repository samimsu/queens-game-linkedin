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

const level523 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "D"],
    ["A", "A", "A", "E", "E", "B", "C", "D", "D"],
    ["F", "A", "E", "E", "E", "B", "C", "D", "D"],
    ["F", "A", "E", "G", "G", "B", "B", "B", "B"],
    ["F", "A", "G", "G", "H", "H", "H", "H", "B"],
    ["F", "F", "F", "F", "H", "H", "H", "H", "B"],
    ["I", "I", "I", "F", "H", "H", "H", "H", "B"],
    ["I", "I", "I", "F", "H", "H", "H", "H", "H"],
    ["I", "I", "I", "F", "F", "F", "F", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level523;
