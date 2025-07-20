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

const level446 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "C", "D", "C"],
    ["A", "B", "A", "B", "B", "B", "E", "C", "D", "C"],
    ["A", "A", "A", "B", "E", "E", "E", "C", "C", "C"],
    ["B", "B", "A", "B", "B", "E", "E", "E", "E", "C"],
    ["F", "B", "B", "B", "E", "E", "E", "E", "E", "E"],
    ["F", "F", "F", "F", "F", "E", "E", "E", "E", "E"],
    ["G", "F", "G", "F", "E", "E", "H", "E", "E", "E"],
    ["G", "G", "G", "F", "E", "E", "H", "E", "H", "E"],
    ["I", "I", "G", "F", "E", "E", "H", "H", "H", "H"],
    ["I", "I", "G", "F", "E", "E", "E", "E", "H", "J"],
  ],
  regionColors: {
    A: bittersweet,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: lightOrchid,
    F: halfBaked,
    G: saharaSand,
    H: nomad,
    I: altoMain,
    J: lightWisteria,
  },
  isNew: true,
};

export default level446;
