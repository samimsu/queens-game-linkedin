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

const level500 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "B", "B", "C", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "C", "C", "E", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "F", "E", "E"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "F", "F", "E"],
    ["G", "A", "A", "A", "A", "A", "A", "A", "A", "F", "F"],
    ["G", "G", "G", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["H", "G", "G", "G", "A", "A", "A", "A", "A", "A", "A"],
    ["H", "H", "I", "J", "J", "A", "A", "A", "A", "A", "A"],
    ["K", "H", "I", "I", "J", "I", "A", "A", "A", "A", "A"],
    ["K", "K", "K", "I", "I", "I", "A", "A", "A", "A", "A"],
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
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level500;
