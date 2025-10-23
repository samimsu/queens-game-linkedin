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

const level541 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "B", "C", "E", "E", "D"],
    ["A", "A", "A", "C", "C", "C", "E", "F", "F"],
    ["A", "A", "A", "G", "G", "C", "E", "F", "F"],
    ["H", "H", "A", "A", "G", "G", "E", "F", "F"],
    ["H", "H", "A", "G", "G", "G", "G", "G", "G"],
    ["H", "H", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "I", "I", "I", "G", "G"],
    ["G", "G", "G", "G", "I", "I", "I", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level541;
