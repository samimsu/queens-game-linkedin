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

const level514 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "A"],
    ["A", "A", "A", "A", "C", "B", "B", "B", "B", "B"],
    ["D", "D", "D", "C", "C", "E", "C", "B", "B", "B"],
    ["F", "F", "D", "C", "E", "E", "C", "G", "G", "G"],
    ["F", "D", "D", "C", "E", "C", "C", "G", "H", "G"],
    ["D", "D", "D", "C", "C", "C", "G", "G", "H", "G"],
    ["I", "I", "I", "I", "I", "I", "G", "H", "H", "G"],
    ["I", "J", "I", "I", "I", "I", "G", "G", "H", "G"],
    ["I", "J", "J", "J", "I", "I", "G", "G", "G", "G"],
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
  isNew: true,
};

export default level514;
