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

const level173 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "C", "D"],
    ["A", "B", "B", "E", "C", "C", "C", "C", "D", "D"],
    ["A", "B", "E", "E", "E", "C", "C", "F", "F", "F"],
    ["B", "B", "E", "C", "C", "C", "G", "G", "G", "F"],
    ["C", "C", "E", "C", "C", "G", "G", "G", "G", "G"],
    ["C", "C", "C", "C", "G", "G", "G", "G", "H", "G"],
    ["C", "C", "H", "H", "H", "H", "H", "G", "H", "H"],
    ["C", "C", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["C", "I", "I", "I", "I", "H", "J", "J", "H", "J"],
    ["I", "I", "I", "I", "H", "H", "H", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
};

export default level173;
