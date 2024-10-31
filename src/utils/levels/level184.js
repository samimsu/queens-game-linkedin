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

const level184 = {
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "D", "D", "D", "D", "D"],
    ["A", "A", "E", "E", "E", "C", "C", "D", "D", "D", "D"],
    ["A", "A", "A", "E", "F", "F", "F", "D", "D", "D", "D"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "F", "F", "D"],
    ["A", "F", "F", "G", "F", "F", "F", "H", "F", "F", "D"],
    ["A", "F", "G", "G", "G", "F", "H", "H", "H", "F", "D"],
    ["A", "F", "F", "F", "F", "I", "F", "F", "F", "F", "D"],
    ["A", "F", "J", "J", "F", "F", "F", "J", "J", "F", "D"],
    ["A", "F", "F", "J", "J", "J", "J", "J", "F", "F", "D"],
    ["K", "K", "F", "F", "F", "F", "F", "F", "F", "D", "D"],
    ["K", "K", "K", "K", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightOrchid,
    C: lightWisteria,
    D: halfBaked,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: celadon,
    J: bittersweet,
    K: turquoiseBlue,
  },
};

export default level184;
