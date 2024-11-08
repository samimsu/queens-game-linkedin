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

const level33 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "D", "B", "E", "E", "F", "F", "C", "C"],
    ["A", "D", "D", "D", "E", "E", "F", "F", "F", "C"],
    ["G", "G", "D", "E", "E", "E", "E", "F", "F", "F"],
    ["G", "E", "E", "E", "E", "E", "E", "E", "E", "F"],
    ["G", "G", "E", "E", "E", "E", "E", "E", "H", "F"],
    ["G", "I", "I", "E", "E", "E", "E", "H", "H", "H"],
    ["G", "I", "E", "E", "I", "I", "E", "E", "H", "H"],
    ["G", "I", "E", "I", "I", "J", "J", "E", "J", "H"],
    ["I", "I", "I", "I", "J", "J", "J", "J", "J", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: altoMain,
    C: chardonnay,
    D: celadon,
    E: saharaSand,
    F: lightOrchid,
    G: halfBaked,
    H: lightWisteria,
    I: bittersweet,
    J: nomad,
  },
};

export default level33;
