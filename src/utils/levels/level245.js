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

const level245 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "B", "D", "B", "C", "E", "C"],
    ["A", "A", "F", "F", "F", "B", "D", "B", "E", "E", "C"],
    ["A", "A", "A", "A", "F", "B", "D", "B", "E", "C", "C"],
    ["A", "A", "F", "F", "F", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "F", "G", "G", "G", "H", "I", "H", "C", "C"],
    ["A", "A", "F", "F", "F", "G", "H", "I", "H", "C", "C"],
    ["A", "A", "A", "G", "G", "G", "H", "H", "H", "C", "A"],
    ["A", "J", "A", "G", "K", "K", "K", "K", "H", "C", "A"],
    ["J", "J", "A", "G", "G", "G", "K", "K", "H", "C", "A"],
    ["J", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: turquoiseBlue,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: lightWisteria,
    J: halfBaked,
    K: chardonnay,
  },
};

export default level245;
