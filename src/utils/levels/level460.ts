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

const level460 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "C", "A", "A", "A", "D", "B", "B", "E"],
    ["A", "A", "C", "A", "A", "A", "D", "B", "E", "E"],
    ["A", "A", "C", "A", "A", "A", "D", "B", "E", "E"],
    ["F", "F", "C", "A", "A", "D", "D", "G", "G", "G"],
    ["F", "F", "C", "C", "C", "C", "C", "C", "G", "G"],
    ["F", "F", "C", "C", "C", "C", "C", "C", "H", "G"],
    ["F", "I", "C", "I", "I", "J", "J", "C", "H", "G"],
    ["F", "I", "C", "I", "J", "J", "J", "C", "H", "G"],
    ["I", "I", "I", "I", "J", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: halfBaked,
    B: anakiwa,
    C: lightOrchid,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
    J: lightWisteria,
  },
};

export default level460;
