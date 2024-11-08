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

const level31 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "C", "C", "C", "D", "D", "B", "A"],
    ["A", "B", "C", "E", "E", "E", "D", "B", "A"],
    ["A", "B", "C", "E", "E", "E", "D", "B", "A"],
    ["A", "B", "F", "E", "E", "E", "F", "B", "A"],
    ["A", "G", "F", "F", "F", "F", "F", "B", "H"],
    ["A", "G", "G", "G", "G", "G", "B", "B", "H"],
    ["A", "A", "A", "A", "I", "I", "I", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: bittersweet,
    H: halfBaked,
    I: saharaSand,
  },
};

export default level31;
