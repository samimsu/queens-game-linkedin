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

const level362 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "C", "D", "D", "E"],
    ["A", "B", "B", "C", "D", "D", "D", "D", "D", "E"],
    ["A", "B", "C", "C", "D", "D", "D", "E", "E", "E"],
    ["A", "A", "C", "D", "D", "E", "E", "E", "E", "E"],
    ["F", "A", "A", "D", "D", "E", "E", "E", "G", "G"],
    ["F", "F", "A", "A", "E", "E", "G", "G", "G", "G"],
    ["F", "F", "F", "A", "A", "G", "G", "G", "H", "H"],
    ["F", "F", "F", "F", "A", "A", "H", "H", "H", "I"],
    ["F", "F", "F", "F", "F", "A", "A", "I", "I", "I"],
    ["F", "F", "F", "F", "F", "F", "A", "A", "J", "J"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
    J: lightWisteria,
  },
};

export default level362;
