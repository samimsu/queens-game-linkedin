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

const level324 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "A", "A", "A", "A", "A"],
    ["C", "D", "D", "C", "A", "C", "E", "E", "C"],
    ["C", "D", "C", "C", "C", "C", "C", "E", "C"],
    ["C", "C", "C", "F", "G", "H", "C", "C", "C"],
    ["I", "F", "F", "F", "G", "H", "H", "H", "I"],
    ["I", "F", "F", "F", "G", "H", "H", "I", "I"],
    ["I", "F", "F", "I", "G", "I", "H", "H", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: anakiwa,
    I: lightOrchid,
  },
};

export default level324;
