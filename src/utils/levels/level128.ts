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

const level128 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "C", "D"],
    ["A", "B", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "B", "D", "D", "D", "D"],
    ["E", "A", "F", "F", "F", "F", "G", "D", "G"],
    ["E", "E", "F", "H", "H", "F", "G", "G", "G"],
    ["E", "F", "F", "F", "H", "F", "F", "F", "F"],
    ["F", "F", "H", "H", "H", "H", "H", "F", "I"],
    ["F", "H", "H", "H", "H", "H", "H", "H", "I"],
    ["F", "F", "H", "H", "H", "H", "H", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
};

export default level128;
