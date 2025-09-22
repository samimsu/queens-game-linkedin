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

const level509 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "B", "E", "E", "F", "G", "G", "C"],
    ["A", "D", "D", "B", "E", "F", "F", "G", "H", "C"],
    ["A", "D", "D", "B", "E", "E", "F", "G", "G", "C"],
    ["A", "D", "D", "B", "E", "F", "F", "G", "C", "C"],
    ["A", "A", "A", "F", "F", "F", "F", "F", "C", "C"],
    ["I", "A", "A", "A", "A", "F", "F", "F", "J", "J"],
    ["I", "I", "I", "I", "A", "F", "J", "J", "J", "J"],
    ["I", "I", "I", "I", "I", "J", "J", "J", "J", "J"],
    ["I", "I", "I", "I", "J", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: altoMain,
    D: halfBaked,
    E: anakiwa,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: celadon,
  },
};

export default level509;
