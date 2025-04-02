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

const level298 = {
  size: 10,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "D", "E", "E", "E"],
    ["A", "B", "B", "B", "C", "D", "D", "D", "E", "E"],
    ["A", "B", "F", "G", "G", "D", "E", "E", "E", "E"],
    ["A", "A", "F", "G", "G", "G", "G", "G", "E", "E"],
    ["H", "A", "F", "G", "I", "I", "I", "I", "I", "I"],
    ["H", "H", "F", "G", "F", "I", "F", "I", "F", "I"],
    ["H", "F", "F", "F", "F", "F", "F", "F", "F", "I"],
    ["H", "F", "F", "F", "F", "F", "F", "F", "F", "J"],
    ["H", "H", "F", "F", "F", "F", "F", "F", "J", "J"],
    ["H", "H", "H", "H", "H", "H", "H", "J", "J", "J"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: celadon,
    J: nomad,
  },
};

export default level298;
