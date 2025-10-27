import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level544 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "B", "C", "C", "C"],
    ["A", "D", "E", "D", "D", "B", "B", "B", "C"],
    ["A", "D", "E", "E", "D", "D", "D", "D", "F"],
    ["G", "D", "E", "E", "E", "E", "E", "D", "F"],
    ["G", "D", "D", "D", "D", "E", "E", "D", "F"],
    ["G", "G", "G", "H", "D", "D", "E", "D", "F"],
    ["I", "H", "H", "H", "F", "D", "D", "D", "F"],
    ["I", "I", "I", "I", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightOrchid,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
};

export default level544;
