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

const level284 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "C", "D", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "C", "D", "C", "C"],
    ["A", "A", "E", "E", "E", "D", "D", "D", "C", "C"],
    ["A", "A", "F", "F", "F", "F", "G", "D", "C", "C"],
    ["A", "A", "H", "G", "G", "G", "G", "D", "C", "C"],
    ["A", "A", "H", "H", "H", "H", "H", "D", "C", "C"],
    ["I", "I", "I", "I", "J", "J", "I", "I", "I", "C"],
    ["I", "I", "J", "J", "J", "I", "I", "I", "C", "C"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
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
    J: halfBaked,
  },
};

export default level284;
