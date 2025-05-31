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

const level389 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "D", "E", "E", "E"],
    ["A", "F", "B", "C", "G", "C", "D", "D", "H", "E"],
    ["A", "F", "B", "C", "G", "G", "G", "D", "H", "E"],
    ["A", "F", "C", "C", "I", "I", "G", "D", "H", "E"],
    ["A", "F", "C", "F", "I", "G", "G", "H", "H", "E"],
    ["A", "F", "F", "F", "I", "H", "H", "H", "E", "E"],
    ["A", "A", "A", "A", "I", "I", "I", "I", "E", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "I", "E", "J"],
    ["J", "E", "E", "E", "E", "E", "E", "E", "E", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: altoMain,
    D: halfBaked,
    E: anakiwa,
    F: nomad,
    G: lightOrchid,
    H: bittersweet,
    I: saharaSand,
    J: celadon,
  },
};

export default level389;
