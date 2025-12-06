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

const level584 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "A", "A", "A"],
    ["A", "C", "A", "A", "B", "A", "A", "D", "A"],
    ["A", "C", "C", "A", "A", "A", "D", "D", "A"],
    ["A", "A", "C", "C", "E", "D", "D", "A", "A"],
    ["F", "A", "C", "C", "E", "D", "D", "A", "G"],
    ["F", "A", "A", "C", "D", "D", "A", "A", "G"],
    ["F", "F", "A", "A", "A", "A", "A", "H", "G"],
    ["F", "F", "F", "A", "A", "A", "H", "H", "G"],
    ["F", "F", "F", "F", "F", "F", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level584;
