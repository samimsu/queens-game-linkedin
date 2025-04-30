import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  feijoa,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level86 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "A"],
    ["A", "A", "A", "C", "A", "A", "A", "B", "A", "A"],
    ["A", "A", "A", "D", "D", "D", "A", "A", "A", "A"],
    ["A", "A", "E", "E", "E", "E", "E", "E", "A", "A"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "F", "A"],
    ["A", "A", "G", "G", "H", "H", "I", "I", "A", "A"],
    ["J", "J", "G", "G", "H", "H", "I", "I", "J", "J"],
    ["J", "J", "H", "H", "H", "H", "H", "H", "H", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: feijoa,
    H: bittersweet,
    I: saharaSand,
    J: nomad,
  },
};

export default level86;
