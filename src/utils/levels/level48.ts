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

const level48 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "D", "D", "B"],
    ["A", "E", "C", "F", "F", "F", "D", "D", "B"],
    ["A", "E", "F", "F", "F", "F", "F", "G", "B"],
    ["A", "E", "F", "F", "H", "F", "F", "G", "B"],
    ["A", "E", "F", "F", "F", "F", "F", "G", "B"],
    ["I", "E", "E", "F", "F", "F", "G", "G", "B"],
    ["I", "G", "G", "G", "G", "G", "G", "G", "B"],
    ["I", "I", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: saharaSand,
    C: lightOrchid,
    D: anakiwa,
    E: chardonnay,
    F: lightWisteria,
    G: celadon,
    H: altoMain,
    I: bittersweet,
  },
};

export default level48;
