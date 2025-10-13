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

const level530 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "D", "D"],
    ["A", "E", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "E", "E", "C", "C", "D", "D", "D", "F"],
    ["E", "E", "C", "C", "G", "D", "D", "F", "F"],
    ["E", "C", "C", "G", "G", "G", "F", "F", "H"],
    ["C", "C", "G", "G", "G", "F", "F", "H", "H"],
    ["C", "G", "G", "G", "F", "F", "H", "H", "H"],
    ["G", "G", "G", "F", "F", "H", "H", "H", "I"],
    ["G", "G", "F", "F", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
  isNew: true,
};

export default level530;
