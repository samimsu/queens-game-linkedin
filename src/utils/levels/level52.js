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

const level52 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "A", "A", "D", "A", "A", "B", "B"],
    ["A", "C", "C", "E", "E", "D", "D", "A", "A", "B"],
    ["C", "C", "E", "E", "F", "F", "D", "D", "A", "A"],
    ["G", "G", "E", "F", "F", "A", "A", "H", "H", "A"],
    ["A", "G", "G", "F", "A", "A", "H", "H", "A", "A"],
    ["A", "A", "G", "A", "A", "A", "H", "A", "A", "A"],
    ["A", "A", "A", "A", "I", "A", "A", "A", "J", "A"],
    ["A", "A", "A", "I", "I", "A", "A", "J", "J", "A"],
    ["A", "A", "I", "I", "A", "A", "J", "J", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: nomad,
    C: bittersweet,
    D: anakiwa,
    E: lightWisteria,
    F: altoMain,
    G: halfBaked,
    H: celadon,
    I: lightOrchid,
    J: saharaSand,
  },
};

export default level52;
