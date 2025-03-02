import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  coldPurple,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level306 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "D", "D", "D"],
    ["A", "A", "A", "A", "B", "B", "C", "C", "E", "D"],
    ["A", "F", "F", "G", "G", "G", "G", "C", "E", "D"],
    ["A", "F", "F", "G", "G", "G", "G", "C", "E", "E"],
    ["F", "F", "H", "G", "G", "G", "G", "C", "C", "E"],
    ["H", "H", "H", "H", "G", "G", "I", "I", "C", "I"],
    ["H", "H", "H", "H", "G", "G", "I", "I", "I", "I"],
    ["J", "K", "H", "K", "G", "G", "K", "I", "K", "I"],
    ["H", "K", "K", "K", "G", "G", "K", "K", "K", "I"],
    ["H", "H", "K", "K", "K", "K", "K", "K", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: anakiwa,
    I: chardonnay,
    J: coldPurple,
    K: halfBaked,
  },
};

export default level306;
