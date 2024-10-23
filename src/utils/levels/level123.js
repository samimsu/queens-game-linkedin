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

const level123 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "A", "A", "A"],
    ["A", "A", "C", "C", "A", "B", "B", "A", "A", "A"],
    ["A", "A", "C", "C", "A", "B", "D", "D", "A", "A"],
    ["E", "A", "C", "A", "A", "A", "D", "D", "A", "A"],
    ["E", "E", "A", "A", "A", "A", "D", "A", "A", "A"],
    ["F", "F", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "F", "G", "H", "H", "I", "I", "A", "A", "A"],
    ["F", "G", "G", "H", "H", "I", "I", "A", "J", "J"],
    ["A", "A", "A", "H", "A", "A", "I", "A", "J", "J"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
    J: nomad,
  },
};

export default level123;
