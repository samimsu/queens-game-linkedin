import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level119 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "A"],
    ["A", "C", "C", "A", "A", "A", "D", "B", "B", "A"],
    ["A", "C", "C", "A", "A", "D", "D", "D", "A", "A"],
    ["A", "A", "A", "E", "E", "E", "D", "A", "A", "A"],
    ["A", "A", "A", "E", "E", "E", "F", "F", "F", "A"],
    ["A", "A", "G", "E", "E", "E", "F", "F", "F", "A"],
    ["A", "G", "G", "G", "H", "H", "F", "F", "F", "A"],
    ["I", "I", "G", "A", "H", "H", "J", "J", "A", "A"],
    ["I", "I", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
    J: nomad,
  },
};

export default level119;
