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

const level610 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["C", "C", "C", "A", "A", "A", "A", "B", "B"],
    ["D", "E", "C", "F", "F", "F", "A", "A", "A"],
    ["D", "C", "C", "G", "G", "F", "A", "H", "A"],
    ["D", "D", "C", "F", "F", "F", "H", "H", "A"],
    ["C", "C", "C", "F", "A", "A", "A", "H", "A"],
    ["I", "I", "I", "F", "F", "F", "A", "H", "A"],
    ["I", "I", "I", "A", "A", "A", "A", "H", "A"],
    ["I", "I", "I", "I", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: nomad,
    C: lightWisteria,
    D: anakiwa,
    E: chardonnay,
    F: celadon,
    G: altoMain,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level610;
