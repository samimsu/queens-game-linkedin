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

const level51 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "A", "A", "C", "A"],
    ["A", "A", "D", "A", "A", "A", "A", "C", "C", "A"],
    ["E", "A", "D", "A", "A", "A", "A", "C", "A", "A"],
    ["E", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["E", "A", "A", "A", "A", "A", "F", "F", "F", "A"],
    ["E", "A", "A", "G", "G", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "G", "A", "A", "A", "H", "A"],
    ["A", "I", "I", "A", "A", "A", "A", "H", "H", "H"],
    ["A", "I", "I", "A", "A", "J", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "J", "J", "J", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: saharaSand,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: anakiwa,
    H: nomad,
    I: halfBaked,
    J: lightOrchid,
  },
};

export default level51;
