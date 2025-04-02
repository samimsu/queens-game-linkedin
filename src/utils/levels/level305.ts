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

const level305 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "B", "B", "B"],
    ["A", "B", "B", "C", "D", "C", "B", "B", "B"],
    ["A", "A", "B", "B", "D", "D", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "D", "B", "B", "E"],
    ["A", "A", "F", "B", "B", "D", "B", "B", "E"],
    ["A", "A", "F", "B", "B", "B", "B", "E", "E"],
    ["A", "F", "F", "B", "B", "B", "G", "E", "G"],
    ["H", "F", "H", "B", "B", "I", "G", "G", "G"],
    ["H", "H", "H", "B", "B", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: anakiwa,
    D: lightWisteria,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level305;
