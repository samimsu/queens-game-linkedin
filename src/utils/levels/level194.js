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

const level194 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "B", "D", "B", "D", "C", "D", "C"],
    ["A", "A", "D", "D", "D", "D", "D", "D", "D", "C"],
    ["A", "D", "D", "E", "E", "F", "F", "D", "C", "C"],
    ["A", "A", "D", "G", "E", "E", "F", "D", "D", "C"],
    ["A", "D", "D", "G", "H", "H", "F", "D", "C", "C"],
    ["I", "I", "D", "G", "H", "H", "H", "D", "D", "J"],
    ["I", "D", "D", "D", "D", "D", "D", "D", "J", "J"],
    ["I", "D", "I", "D", "I", "D", "I", "D", "D", "J"],
    ["I", "I", "I", "I", "I", "I", "I", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: halfBaked,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: anakiwa,
  },
};

export default level194;
