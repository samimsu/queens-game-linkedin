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

const level84 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "C", "C", "C", "A", "A", "A"],
    ["B", "D", "D", "D", "C", "E", "E", "E", "A"],
    ["B", "B", "B", "D", "F", "F", "F", "E", "A"],
    ["B", "D", "D", "D", "F", "E", "E", "E", "A"],
    ["B", "D", "G", "G", "G", "G", "G", "E", "A"],
    ["B", "D", "D", "D", "G", "E", "E", "E", "A"],
    ["B", "B", "B", "B", "H", "I", "I", "A", "A"],
    ["B", "B", "B", "B", "H", "I", "A", "A", "A"],
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

export default level84;
