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

const level507 = {
  size: 11,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "B", "B", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "A", "B", "C", "E", "E", "C", "C", "C", "D", "D"],
    ["C", "A", "B", "C", "C", "E", "E", "E", "C", "D", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "F", "F", "C", "C", "G", "C", "H", "H", "H", "C"],
    ["C", "I", "F", "F", "F", "G", "H", "H", "J", "C", "C"],
    ["C", "I", "I", "C", "G", "G", "C", "C", "J", "J", "C"],
    ["C", "C", "I", "C", "G", "C", "C", "C", "C", "J", "C"],
    ["C", "C", "I", "C", "C", "C", "K", "K", "K", "J", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "K", "K", "C"],
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

export default level507;
