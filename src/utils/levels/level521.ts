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

const level521 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "B", "C", "D", "E", "E", "E", "C"],
    ["A", "B", "B", "C", "D", "D", "E", "F", "C"],
    ["C", "C", "C", "C", "G", "D", "E", "F", "C"],
    ["C", "H", "G", "G", "G", "G", "G", "F", "C"],
    ["C", "H", "G", "H", "H", "C", "C", "C", "C"],
    ["C", "H", "H", "H", "H", "C", "I", "I", "I"],
    ["C", "H", "H", "H", "H", "C", "I", "I", "I"],
    ["C", "C", "C", "C", "C", "C", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: lightOrchid,
  },
  isNew: true,
};

export default level521;
