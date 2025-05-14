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

const level12 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "D", "D", "D"],
    ["E", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["E", "E", "A", "A", "B", "B", "C", "C", "D"],
    ["F", "E", "E", "A", "A", "B", "B", "C", "C"],
    ["F", "F", "E", "E", "A", "A", "B", "B", "C"],
    ["G", "F", "F", "E", "E", "A", "A", "B", "B"],
    ["G", "G", "F", "F", "E", "E", "A", "A", "B"],
    ["H", "G", "G", "F", "F", "E", "I", "A", "A"],
    ["H", "H", "G", "G", "F", "F", "I", "I", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: saharaSand,
    C: halfBaked,
    D: altoMain,
    E: bittersweet,
    F: anakiwa,
    G: chardonnay,
    H: lightWisteria,
    I: celadon,
  },
  isNew: true,
};

export default level12;
