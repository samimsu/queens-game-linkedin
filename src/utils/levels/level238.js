import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level238 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "D", "E", "B"],
    ["A", "D", "D", "D", "D", "D", "D", "E", "B"],
    ["F", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["F", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["F", "D", "D", "D", "D", "D", "D", "D", "G"],
    ["F", "H", "D", "D", "D", "D", "D", "D", "G"],
    ["F", "H", "D", "D", "D", "D", "I", "I", "G"],
    ["F", "F", "F", "F", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level238;
