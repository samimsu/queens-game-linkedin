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

const level38 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "C"],
    ["D", "A", "B", "B", "B", "B", "B", "B", "C"],
    ["D", "A", "B", "E", "E", "E", "B", "B", "B"],
    ["D", "A", "B", "B", "B", "E", "B", "B", "B"],
    ["A", "A", "A", "E", "E", "E", "F", "F", "F"],
    ["G", "G", "G", "E", "H", "H", "H", "H", "F"],
    ["G", "I", "I", "E", "E", "E", "H", "F", "F"],
    ["G", "I", "I", "I", "I", "I", "I", "I", "F"],
    ["G", "I", "I", "I", "I", "I", "F", "F", "F"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: saharaSand,
    F: anakiwa,
    G: lightWisteria,
    H: halfBaked,
    I: altoMain,
  },
};

export default level38;
