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

const level107 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "C", "C", "C", "C"],
    ["E", "A", "A", "B", "C", "C", "C", "C", "C"],
    ["F", "F", "F", "B", "B", "B", "I", "C", "I"],
    ["F", "G", "G", "G", "H", "G", "I", "C", "I"],
    ["F", "F", "G", "G", "G", "G", "I", "C", "I"],
    ["F", "G", "G", "G", "G", "G", "I", "C", "I"],
    ["F", "F", "F", "G", "G", "G", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: bittersweet,
    H: saharaSand,
    I: halfBaked,
  },
};

export default level107;
