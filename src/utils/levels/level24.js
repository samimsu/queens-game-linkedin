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

const level24 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "C", "C", "C", "A"],
    ["A", "B", "B", "B", "A", "C", "C", "C", "D"],
    ["A", "B", "B", "E", "A", "A", "C", "C", "D"],
    ["A", "E", "E", "E", "E", "A", "A", "F", "F"],
    ["A", "G", "G", "E", "E", "E", "H", "H", "F"],
    ["A", "G", "G", "G", "E", "H", "H", "H", "F"],
    ["A", "G", "G", "G", "F", "H", "H", "H", "F"],
    ["A", "I", "I", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightWisteria,
    C: lightOrchid,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: chardonnay,
    H: anakiwa,
    I: saharaSand,
  },
};

export default level24;
