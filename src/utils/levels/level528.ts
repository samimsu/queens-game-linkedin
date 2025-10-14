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

const level528 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "E", "H", "H", "A", "A"],
    ["A", "B", "B", "A", "E", "E", "E", "H", "H", "A"],
    ["A", "B", "A", "A", "A", "E", "A", "A", "H", "A"],
    ["A", "B", "B", "A", "A", "A", "A", "A", "A", "A"],
    ["C", "C", "C", "A", "F", "F", "F", "F", "I", "I"],
    ["A", "C", "A", "A", "A", "F", "A", "A", "A", "I"],
    ["A", "C", "D", "A", "A", "A", "A", "A", "J", "I"],
    ["A", "D", "D", "A", "G", "G", "A", "A", "J", "I"],
    ["A", "D", "D", "A", "A", "G", "A", "A", "J", "J"],
    ["A", "A", "A", "A", "A", "G", "G", "A", "A", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: celadon,
    C: altoMain,
    D: nomad,
    E: chardonnay,
    F: bittersweet,
    G: halfBaked,
    H: anakiwa,
    I: saharaSand,
    J: lightOrchid,
  },
};

export default level528;
