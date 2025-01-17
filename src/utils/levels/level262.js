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

const level262 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "D", "D", "B"],
    ["A", "C", "E", "E", "E", "E", "F", "D", "B"],
    ["A", "G", "E", "E", "E", "E", "F", "D", "B"],
    ["A", "G", "G", "E", "E", "E", "F", "F", "B"],
    ["A", "H", "G", "G", "E", "E", "F", "I", "B"],
    ["A", "H", "G", "G", "F", "F", "F", "I", "B"],
    ["A", "H", "H", "G", "G", "G", "I", "I", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level262;
