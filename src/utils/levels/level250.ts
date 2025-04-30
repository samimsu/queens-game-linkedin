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

const level250 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "B", "D", "D", "D", "D", "E", "B"],
    ["A", "A", "A", "C", "F", "F", "F", "D", "D", "E", "E"],
    ["A", "C", "C", "C", "F", "D", "D", "D", "D", "E", "E"],
    ["A", "C", "G", "G", "F", "F", "F", "H", "H", "H", "E"],
    ["A", "C", "C", "C", "I", "I", "F", "H", "J", "H", "E"],
    ["A", "A", "A", "A", "F", "F", "F", "H", "J", "H", "E"],
    ["A", "A", "K", "A", "A", "A", "A", "H", "J", "H", "E"],
    ["A", "A", "K", "K", "K", "A", "A", "H", "H", "H", "K"],
    ["A", "A", "A", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "K", "K", "K"],
  ],
  regionColors: {
    A: bittersweet,
    B: halfBaked,
    C: celadon,
    D: anakiwa,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: chardonnay,
    K: turquoiseBlue,
  },
};

export default level250;
