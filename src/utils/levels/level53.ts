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

const level53 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "B", "C", "C"],
    ["A", "A", "A", "C", "D", "D", "D", "C", "B", "C", "E"],
    ["A", "C", "C", "C", "D", "C", "F", "C", "C", "C", "E"],
    ["G", "C", "D", "D", "D", "C", "F", "F", "E", "E", "E"],
    ["G", "C", "C", "C", "C", "C", "C", "C", "E", "C", "E"],
    ["G", "G", "G", "H", "H", "C", "I", "I", "I", "C", "E"],
    ["G", "C", "G", "C", "H", "C", "C", "C", "I", "C", "E"],
    ["G", "C", "G", "C", "H", "C", "J", "C", "I", "C", "K"],
    ["G", "C", "C", "C", "C", "C", "J", "C", "C", "C", "K"],
    ["G", "C", "J", "J", "J", "J", "J", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: lightOrchid,
    B: lightWisteria,
    C: chardonnay,
    D: turquoiseBlue,
    E: celadon,
    F: nomad,
    G: halfBaked,
    H: saharaSand,
    I: bittersweet,
    J: altoMain,
    K: anakiwa,
  },
};

export default level53;
