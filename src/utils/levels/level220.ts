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

const level220 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "E", "C", "C", "C", "C", "C"],
    ["D", "D", "D", "B", "E", "C", "C", "C", "C", "C"],
    ["D", "E", "E", "E", "E", "E", "E", "E", "E", "C"],
    ["E", "E", "E", "E", "E", "E", "F", "E", "E", "E"],
    ["E", "E", "E", "E", "G", "E", "F", "E", "E", "E"],
    ["E", "E", "H", "E", "G", "E", "F", "E", "E", "E"],
    ["I", "E", "H", "E", "G", "G", "F", "F", "J", "E"],
    ["I", "E", "H", "H", "G", "G", "F", "F", "J", "E"],
    ["I", "I", "H", "H", "G", "G", "F", "F", "J", "J"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: lightOrchid,
    D: celadon,
    E: halfBaked,
    F: bittersweet,
    G: anakiwa,
    H: nomad,
    I: saharaSand,
    J: altoMain,
  },
};

export default level220;
