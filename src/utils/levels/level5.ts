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
  turquoiseBlue,
} from "../colors";

const level5 = {
  size: 11,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "C", "C", "C", "E", "E", "E", "E"],
    ["A", "F", "F", "G", "H", "H", "C", "C", "C", "E", "E"],
    ["A", "F", "F", "G", "H", "H", "H", "H", "H", "H", "E"],
    ["A", "F", "F", "G", "H", "H", "H", "H", "H", "H", "E"],
    ["A", "F", "F", "G", "H", "H", "I", "J", "H", "H", "E"],
    ["A", "F", "F", "G", "H", "H", "I", "J", "H", "H", "I"],
    ["K", "F", "F", "G", "H", "H", "I", "J", "H", "H", "I"],
    ["K", "K", "K", "G", "G", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: turquoiseBlue,
    D: anakiwa,
    E: nomad,
    F: saharaSand,
    G: lightOrchid,
    H: halfBaked,
    I: altoMain,
    J: celadon,
    K: lightWisteria,
  },
};

export default level5;
