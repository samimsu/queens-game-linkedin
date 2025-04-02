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

const level26 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "C", "A", "D", "B", "B", "E", "B"],
    ["A", "C", "C", "C", "D", "D", "E", "E", "E"],
    ["A", "A", "C", "A", "D", "D", "A", "E", "A"],
    ["F", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "F", "G", "A", "H", "A", "A", "I", "A"],
    ["F", "G", "G", "G", "H", "H", "I", "I", "I"],
    ["F", "F", "G", "F", "H", "F", "F", "I", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: halfBaked,
    B: anakiwa,
    C: lightWisteria,
    D: lightOrchid,
    E: chardonnay,
    F: celadon,
    G: bittersweet,
    H: altoMain,
    I: saharaSand,
  },
};

export default level26;
