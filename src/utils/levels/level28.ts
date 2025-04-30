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

const level28 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "A", "C", "C", "D"],
    ["A", "E", "E", "E", "B", "A", "C", "D", "D"],
    ["A", "E", "B", "B", "B", "A", "C", "C", "C"],
    ["A", "E", "E", "A", "A", "A", "F", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "F", "A", "F"],
    ["A", "A", "A", "A", "G", "A", "A", "A", "F"],
    ["H", "H", "H", "A", "G", "A", "G", "A", "A"],
    ["H", "I", "I", "A", "G", "G", "G", "A", "A"],
    ["H", "H", "I", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: bittersweet,
    D: lightOrchid,
    E: saharaSand,
    F: celadon,
    G: lightWisteria,
    H: halfBaked,
    I: anakiwa,
  },
};

export default level28;
