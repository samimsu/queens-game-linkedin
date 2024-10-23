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

const level102 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "C", "C", "C", "B", "D", "D", "B"],
    ["A", "C", "C", "E", "C", "D", "D", "F", "B"],
    ["A", "C", "E", "E", "D", "D", "G", "F", "F"],
    ["A", "C", "E", "H", "H", "G", "G", "G", "F"],
    ["A", "C", "E", "E", "H", "H", "G", "I", "F"],
    ["A", "C", "C", "E", "C", "H", "I", "I", "F"],
    ["A", "A", "C", "C", "C", "A", "A", "I", "I"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level102;
