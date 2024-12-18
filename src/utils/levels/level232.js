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

const level232 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "A"],
    ["A", "C", "C", "C", "C", "A", "A", "A", "B", "A"],
    ["D", "D", "A", "A", "C", "E", "A", "A", "B", "A"],
    ["D", "A", "A", "A", "A", "E", "A", "F", "F", "A"],
    ["D", "A", "A", "A", "A", "E", "A", "F", "A", "A"],
    ["G", "A", "A", "A", "A", "E", "E", "F", "A", "A"],
    ["G", "G", "G", "H", "A", "A", "A", "A", "A", "A"],
    ["I", "I", "I", "H", "H", "H", "J", "J", "J", "A"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "J", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: halfBaked,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: altoMain,
  },
};

export default level232;
