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

const level395 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "C", "D", "C", "C", "C", "C", "B"],
    ["B", "C", "C", "D", "C", "C", "C", "E", "B"],
    ["B", "B", "C", "C", "C", "C", "C", "B", "B"],
    ["B", "C", "C", "C", "C", "C", "F", "G", "G"],
    ["B", "B", "C", "C", "C", "F", "F", "G", "G"],
    ["H", "H", "H", "H", "H", "I", "I", "I", "I"],
    ["H", "H", "H", "H", "H", "H", "H", "I", "I"],
  ],
  regionColors: {
    A: chardonnay,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
  isNew: true,
};

export default level395;
