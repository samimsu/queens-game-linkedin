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

const level478 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "C", "A", "A", "A", "A", "A", "D", "A", "A"],
    ["B", "B", "C", "A", "A", "A", "A", "D", "D", "A", "A"],
    ["C", "C", "C", "C", "C", "A", "D", "D", "D", "D", "D"],
    ["E", "E", "C", "A", "A", "A", "A", "D", "D", "F", "F"],
    ["E", "A", "C", "A", "A", "A", "A", "A", "D", "F", "F"],
    ["E", "A", "A", "A", "G", "A", "F", "F", "F", "F", "F"],
    ["E", "H", "A", "G", "G", "I", "G", "G", "F", "J", "F"],
    ["H", "H", "H", "G", "I", "I", "I", "G", "J", "J", "J"],
    ["G", "H", "G", "G", "G", "I", "G", "G", "G", "J", "K"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "K", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: nomad,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: anakiwa,
    I: turquoiseBlue,
    J: halfBaked,
    K: celadon,
  },
};

export default level478;
