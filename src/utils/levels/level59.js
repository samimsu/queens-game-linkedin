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

const level59 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "C", "C"],
    ["D", "D", "D", "E", "B", "E", "F", "F", "F"],
    ["D", "G", "G", "E", "B", "E", "F", "F", "F"],
    ["D", "D", "G", "E", "B", "E", "F", "H", "F"],
    ["D", "G", "G", "E", "B", "E", "F", "I", "F"],
    ["D", "G", "G", "E", "E", "E", "F", "I", "F"],
    ["G", "G", "G", "G", "G", "G", "I", "I", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
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

export default level59;
