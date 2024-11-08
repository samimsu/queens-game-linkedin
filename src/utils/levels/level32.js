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

const level32 = {
  size: 11,
  colorRegions: [
    ["A", "A", "B", "C", "D", "D", "D", "E", "F", "E", "D"],
    ["A", "A", "B", "C", "C", "D", "D", "E", "F", "E", "D"],
    ["B", "A", "B", "C", "G", "G", "D", "E", "F", "E", "D"],
    ["B", "A", "B", "C", "G", "G", "D", "E", "E", "E", "D"],
    ["B", "B", "B", "C", "G", "G", "D", "D", "E", "D", "D"],
    ["C", "C", "C", "C", "G", "D", "D", "D", "D", "D", "D"],
    ["C", "H", "G", "G", "G", "G", "G", "D", "I", "I", "I"],
    ["C", "H", "H", "H", "G", "D", "D", "D", "I", "J", "J"],
    ["C", "H", "K", "H", "G", "D", "D", "D", "I", "I", "J"],
    ["C", "H", "K", "H", "G", "D", "D", "D", "I", "J", "J"],
    ["C", "H", "K", "H", "G", "G", "D", "D", "I", "I", "I"],
  ],
  regionColors: {
    A: saharaSand,
    B: lightWisteria,
    C: turquoiseBlue,
    D: anakiwa,
    E: chardonnay,
    F: celadon,
    G: halfBaked,
    H: bittersweet,
    I: lightOrchid,
    J: nomad,
    K: altoMain,
  },
};

export default level32;
