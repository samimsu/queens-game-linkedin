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

const level512 = {
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "D", "D", "D", "D"],
    ["A", "B", "B", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["A", "B", "B", "E", "E", "E", "E", "E", "C", "C", "D"],
    ["A", "B", "B", "E", "F", "F", "F", "E", "C", "C", "D"],
    ["A", "A", "G", "G", "G", "G", "G", "G", "G", "H", "D"],
    ["A", "A", "G", "G", "G", "G", "G", "G", "G", "H", "D"],
    ["A", "A", "G", "G", "G", "I", "G", "G", "G", "H", "D"],
    ["A", "A", "G", "G", "G", "G", "G", "G", "G", "H", "H"],
    ["A", "A", "J", "G", "G", "G", "G", "G", "H", "H", "H"],
    ["A", "A", "J", "J", "J", "K", "K", "K", "K", "H", "H"],
    ["A", "A", "A", "A", "J", "K", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: nomad,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: anakiwa,
    I: lightWisteria,
    J: halfBaked,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level512;
