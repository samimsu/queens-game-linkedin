import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level61 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "D", "E", "E", "B", "B", "C", "C"],
    ["A", "A", "D", "D", "E", "E", "B", "C", "C"],
    ["A", "A", "D", "E", "E", "B", "B", "F", "C"],
    ["A", "A", "A", "A", "B", "B", "F", "F", "F"],
    ["A", "G", "A", "A", "A", "B", "F", "H", "F"],
    ["G", "G", "G", "A", "A", "B", "H", "H", "H"],
    ["G", "I", "G", "B", "B", "B", "B", "B", "B"],
    ["I", "I", "I", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: altoMain,
    C: bittersweet,
    D: anakiwa,
    E: celadon,
    F: lightOrchid,
    G: lightWisteria,
    H: saharaSand,
    I: chardonnay,
  },
};

export default level61;
