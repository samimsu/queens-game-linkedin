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

const level246 = {
  size: 11,
  colorRegions: [
    ["A", "B", "B", "B", "C", "D", "D", "D", "C", "E", "E"],
    ["A", "A", "A", "B", "C", "D", "F", "D", "C", "G", "E"],
    ["H", "B", "B", "B", "C", "D", "F", "D", "C", "G", "E"],
    ["H", "B", "C", "C", "C", "D", "F", "D", "C", "G", "E"],
    ["H", "B", "B", "B", "C", "D", "D", "D", "C", "G", "G"],
    ["H", "H", "C", "C", "C", "C", "C", "C", "C", "C", "G"],
    ["H", "C", "C", "I", "I", "I", "C", "J", "J", "J", "K"],
    ["H", "H", "C", "C", "C", "I", "C", "J", "K", "K", "K"],
    ["H", "C", "C", "I", "I", "I", "C", "J", "J", "J", "K"],
    ["H", "H", "C", "I", "C", "C", "C", "C", "C", "J", "K"],
    ["H", "H", "C", "I", "I", "I", "C", "J", "J", "J", "K"],
  ],
  regionColors: {
    A: anakiwa,
    B: bittersweet,
    C: halfBaked,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: turquoiseBlue,
    I: lightOrchid,
    J: lightWisteria,
    K: nomad,
  },
};

export default level246;
