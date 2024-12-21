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

const level235 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C"],
    ["A", "D", "A", "D", "E", "A", "B", "B", "C", "C"],
    ["A", "D", "D", "D", "A", "A", "F", "B", "B", "C"],
    ["A", "F", "D", "F", "F", "F", "F", "F", "F", "C"],
    ["A", "F", "F", "F", "F", "F", "C", "F", "F", "C"],
    ["A", "F", "F", "F", "F", "C", "C", "C", "C", "C"],
    ["F", "F", "F", "F", "F", "F", "C", "G", "C", "C"],
    ["F", "H", "H", "C", "C", "F", "G", "G", "G", "C"],
    ["I", "I", "H", "H", "C", "J", "G", "C", "G", "C"],
    ["I", "H", "H", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: halfBaked,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
    J: celadon,
  },
};

export default level235;
