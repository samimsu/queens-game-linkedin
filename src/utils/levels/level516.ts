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

const level516 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "D", "D"],
    ["A", "A", "A", "A", "B", "E", "C", "C", "D"],
    ["A", "A", "A", "A", "B", "E", "E", "D", "D"],
    ["F", "F", "F", "A", "B", "B", "B", "D", "D"],
    ["F", "I", "F", "A", "A", "A", "B", "D", "B"],
    ["I", "I", "F", "F", "F", "A", "B", "B", "B"],
    ["I", "H", "H", "H", "F", "A", "A", "A", "A"],
    ["I", "H", "G", "H", "F", "A", "A", "A", "A"],
    ["I", "H", "G", "F", "F", "A", "A", "A", "A"],
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

export default level516;
