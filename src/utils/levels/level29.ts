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

const level29 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "A", "C", "C", "D", "D", "B"],
    ["A", "A", "A", "A", "E", "E", "C", "D", "B", "B"],
    ["A", "F", "F", "A", "E", "C", "C", "D", "D", "B"],
    ["A", "F", "A", "A", "E", "E", "C", "D", "G", "G"],
    ["A", "F", "F", "H", "E", "H", "A", "A", "A", "G"],
    ["A", "F", "A", "H", "H", "H", "H", "A", "G", "G"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "G"],
    ["A", "I", "A", "I", "A", "A", "A", "J", "A", "J"],
    ["I", "I", "I", "I", "A", "A", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: altoMain,
    B: nomad,
    C: bittersweet,
    D: celadon,
    E: anakiwa,
    F: saharaSand,
    G: lightOrchid,
    H: chardonnay,
    I: lightWisteria,
    J: halfBaked,
  },
};

export default level29;
