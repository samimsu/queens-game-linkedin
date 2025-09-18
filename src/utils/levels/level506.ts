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

const level506 = {
  size: 11,
  colorRegions: [
    ["A", "B", "B", "A", "A", "A", "C", "D", "D", "E", "F"],
    ["A", "A", "B", "A", "A", "G", "C", "C", "D", "E", "F"],
    ["A", "A", "B", "A", "G", "G", "G", "C", "D", "E", "F"],
    ["A", "A", "B", "A", "A", "G", "C", "C", "D", "E", "E"],
    ["A", "B", "B", "B", "A", "A", "C", "D", "D", "D", "E"],
    ["A", "A", "A", "A", "A", "C", "C", "C", "C", "H", "E"],
    ["A", "A", "A", "C", "C", "C", "I", "I", "I", "H", "E"],
    ["A", "A", "A", "C", "C", "C", "C", "C", "I", "H", "E"],
    ["C", "C", "J", "J", "J", "C", "I", "I", "I", "H", "E"],
    ["C", "C", "C", "C", "C", "C", "I", "H", "H", "H", "E"],
    ["C", "C", "K", "K", "K", "C", "I", "I", "I", "H", "E"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: lightWisteria,
    C: altoMain,
    D: anakiwa,
    E: lightOrchid,
    F: chardonnay,
    G: nomad,
    H: halfBaked,
    I: bittersweet,
    J: celadon,
    K: saharaSand,
  },
  isNew: true,
};

export default level506;
