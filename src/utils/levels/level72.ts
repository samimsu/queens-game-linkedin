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

const level72 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "B", "B", "B"],
    ["A", "A", "C", "C", "D", "C", "C", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "E", "E", "C", "B"],
    ["F", "C", "C", "D", "E", "E", "C", "C", "B"],
    ["F", "G", "C", "C", "E", "C", "C", "H", "I"],
    ["F", "G", "F", "C", "C", "C", "H", "H", "I"],
    ["F", "F", "F", "F", "F", "F", "F", "I", "I"],
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

export default level72;
