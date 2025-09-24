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

const level511 = {
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "C", "C", "D"],
    ["A", "A", "B", "E", "E", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "E", "E", "F", "C", "C", "D", "D", "D"],
    ["G", "G", "E", "E", "H", "F", "H", "C", "D", "D", "D"],
    ["I", "G", "E", "H", "H", "F", "H", "H", "D", "J", "J"],
    ["I", "G", "E", "H", "H", "H", "H", "H", "D", "J", "J"],
    ["I", "G", "E", "H", "H", "H", "H", "H", "D", "J", "J"],
    ["I", "G", "E", "H", "H", "H", "H", "H", "D", "J", "J"],
    ["I", "G", "E", "E", "H", "H", "H", "K", "D", "J", "J"],
    ["I", "G", "G", "E", "G", "G", "K", "K", "D", "J", "J"],
    ["I", "I", "G", "G", "G", "K", "K", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: celadon,
    J: halfBaked,
    K: turquoiseBlue,
  },
};

export default level511;
