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
} from "../colors";

const level11 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "D", "D", "C", "C", "C"],
    ["C", "C", "A", "B", "B", "E", "D", "D", "C", "C"],
    ["C", "F", "F", "E", "E", "E", "D", "D", "C", "C"],
    ["C", "F", "F", "E", "E", "G", "G", "C", "C", "C"],
    ["C", "H", "F", "F", "G", "G", "I", "I", "C", "C"],
    ["C", "H", "H", "H", "G", "G", "J", "I", "I", "C"],
    ["C", "C", "H", "H", "J", "J", "J", "I", "I", "C"],
    ["C", "C", "C", "C", "J", "J", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: halfBaked,
    D: celadon,
    E: anakiwa,
    F: lightOrchid,
    G: bittersweet,
    H: nomad,
    I: altoMain,
    J: saharaSand,
  },
};

export default level11;
