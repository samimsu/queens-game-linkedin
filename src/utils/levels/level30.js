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

const level30 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "D", "D", "B", "D", "D", "B"],
    ["A", "C", "C", "D", "D", "D", "D", "D", "B"],
    ["E", "E", "E", "F", "G", "F", "D", "D", "B"],
    ["E", "E", "E", "F", "G", "F", "B", "B", "B"],
    ["E", "E", "E", "F", "F", "F", "B", "B", "B"],
    ["E", "E", "E", "E", "E", "E", "H", "H", "I"],
    ["E", "E", "E", "E", "E", "E", "I", "H", "I"],
    ["E", "E", "E", "E", "E", "E", "I", "I", "I"],
  ],
  regionColors: {
    A: anakiwa,
    B: saharaSand,
    C: chardonnay,
    D: bittersweet,
    E: lightWisteria,
    F: altoMain,
    G: celadon,
    H: lightOrchid,
    I: halfBaked,
  },
};

export default level30;
