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

const level23 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "A", "A", "A", "D", "D", "D", "B"],
    ["A", "C", "E", "A", "F", "D", "D", "B", "B"],
    ["A", "C", "E", "E", "F", "D", "B", "B", "B"],
    ["G", "G", "F", "F", "F", "F", "F", "B", "G"],
    ["G", "G", "G", "H", "F", "I", "I", "I", "G"],
    ["G", "G", "H", "H", "F", "G", "I", "I", "G"],
    ["G", "H", "H", "H", "G", "G", "G", "I", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: chardonnay,
    B: bittersweet,
    C: anakiwa,
    D: lightOrchid,
    E: halfBaked,
    F: altoMain,
    G: saharaSand,
    H: celadon,
    I: lightWisteria,
  },
};

export default level23;
