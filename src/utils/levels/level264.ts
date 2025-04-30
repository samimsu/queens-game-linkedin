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

const level264 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "C", "D"],
    ["C", "A", "A", "B", "C", "C", "C", "C", "E", "D"],
    ["C", "C", "A", "C", "C", "C", "C", "E", "E", "E"],
    ["C", "C", "C", "C", "F", "F", "C", "C", "E", "E"],
    ["C", "C", "C", "F", "F", "F", "F", "C", "C", "E"],
    ["G", "C", "C", "F", "F", "F", "F", "C", "C", "C"],
    ["G", "G", "C", "C", "F", "F", "C", "C", "C", "C"],
    ["G", "G", "G", "C", "C", "C", "C", "H", "C", "C"],
    ["I", "I", "C", "C", "C", "C", "H", "H", "H", "C"],
    ["I", "C", "C", "C", "C", "J", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: halfBaked,
    F: bittersweet,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
    J: altoMain,
  },
};

export default level264;
