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

const level375 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "A", "A", "C", "B", "B", "B", "C"],
    ["C", "A", "A", "A", "D", "C", "C", "C", "C", "C"],
    ["C", "D", "D", "D", "D", "C", "E", "C", "F", "C"],
    ["C", "C", "C", "C", "C", "C", "E", "C", "F", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "G"],
    ["H", "C", "I", "C", "J", "C", "G", "C", "G", "G"],
    ["H", "C", "I", "C", "J", "C", "G", "C", "G", "G"],
    ["H", "I", "I", "J", "J", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightOrchid,
    B: halfBaked,
    C: nomad,
    D: celadon,
    E: lightWisteria,
    F: bittersweet,
    G: saharaSand,
    H: anakiwa,
    I: altoMain,
    J: chardonnay,
  },
  isNew: true,
};

export default level375;
