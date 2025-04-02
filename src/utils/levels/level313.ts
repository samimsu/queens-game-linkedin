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

const level313 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "B"],
    ["B", "A", "D", "D", "D", "B", "B", "B", "C", "B", "B"],
    ["B", "A", "E", "D", "F", "F", "F", "B", "C", "B", "B"],
    ["B", "B", "E", "D", "B", "F", "G", "B", "B", "B", "B"],
    ["B", "E", "E", "E", "B", "F", "G", "G", "G", "H", "B"],
    ["B", "B", "B", "B", "B", "B", "G", "H", "H", "H", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "H", "B"],
    ["B", "B", "B", "B", "I", "B", "I", "B", "B", "B", "B"],
    ["B", "B", "B", "J", "I", "I", "I", "B", "B", "K", "B"],
    ["B", "B", "B", "J", "I", "B", "I", "B", "B", "K", "B"],
    ["B", "B", "J", "J", "J", "B", "B", "B", "K", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: turquoiseBlue,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: chardonnay,
  },
};

export default level313;
