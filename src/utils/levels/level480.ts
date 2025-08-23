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

const level480 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "C", "A", "A", "D", "D", "A"],
    ["A", "A", "A", "B", "C", "C", "E", "E", "E", "D", "D"],
    ["A", "A", "A", "B", "B", "C", "E", "D", "E", "E", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D", "E", "D", "D"],
    ["A", "A", "A", "A", "A", "F", "D", "D", "D", "D", "D"],
    ["F", "F", "F", "F", "F", "F", "G", "G", "H", "I", "D"],
    ["F", "J", "J", "K", "F", "F", "G", "H", "H", "I", "D"],
    ["F", "J", "K", "K", "F", "F", "G", "G", "H", "I", "I"],
    ["F", "J", "J", "K", "F", "F", "G", "H", "H", "H", "F"],
    ["F", "J", "K", "K", "K", "F", "F", "F", "F", "F", "F"],
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

export default level480;
