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

const level242 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "B", "B", "B", "B", "D", "C"],
    ["A", "A", "E", "E", "E", "E", "E", "D", "D", "D"],
    ["F", "A", "E", "E", "E", "E", "E", "E", "D", "G"],
    ["F", "F", "E", "E", "E", "E", "E", "E", "G", "G"],
    ["F", "F", "E", "E", "E", "E", "E", "E", "G", "G"],
    ["H", "F", "E", "E", "E", "E", "E", "E", "I", "G"],
    ["H", "H", "E", "E", "E", "E", "E", "E", "I", "G"],
    ["H", "H", "H", "J", "J", "I", "I", "I", "I", "J"],
    ["H", "H", "H", "J", "J", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: anakiwa,
    F: altoMain,
    G: saharaSand,
    H: bittersweet,
    I: lightOrchid,
    J: halfBaked,
  },
};

export default level242;
