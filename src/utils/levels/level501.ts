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

const level501 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "A", "A", "C", "A", "A", "A"],
    ["D", "E", "E", "B", "B", "B", "C", "C", "C", "A", "A"],
    ["D", "E", "B", "B", "B", "C", "C", "C", "C", "C", "A"],
    ["D", "E", "B", "F", "F", "F", "C", "C", "C", "C", "C"],
    ["D", "E", "E", "F", "G", "F", "C", "C", "C", "C", "C"],
    ["D", "D", "E", "G", "G", "G", "C", "H", "I", "I", "C"],
    ["D", "D", "E", "J", "G", "J", "H", "H", "I", "C", "C"],
    ["D", "E", "E", "J", "G", "J", "H", "H", "I", "C", "C"],
    ["D", "D", "D", "J", "J", "J", "K", "H", "K", "C", "C"],
    ["D", "D", "D", "D", "D", "J", "K", "K", "K", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: saharaSand,
    D: turquoiseBlue,
    E: lightOrchid,
    F: nomad,
    G: anakiwa,
    H: bittersweet,
    I: altoMain,
    J: halfBaked,
    K: celadon,
  },
};

export default level501;
