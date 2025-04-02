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

const level319 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "D", "D", "C", "B"],
    ["A", "C", "C", "D", "E", "D", "C", "C", "B"],
    ["A", "A", "C", "D", "E", "D", "C", "B", "B"],
    ["F", "A", "C", "D", "E", "D", "C", "G", "G"],
    ["F", "F", "C", "D", "E", "D", "C", "H", "G"],
    ["F", "I", "C", "C", "C", "C", "C", "H", "G"],
    ["F", "I", "I", "I", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level319;
