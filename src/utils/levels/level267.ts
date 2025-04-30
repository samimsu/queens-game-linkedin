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

const level267 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C", "D", "D"],
    ["E", "A", "B", "B", "C", "C", "D", "D", "D"],
    ["E", "B", "B", "F", "F", "F", "F", "E", "D"],
    ["E", "E", "B", "B", "E", "E", "E", "E", "D"],
    ["E", "E", "E", "B", "E", "G", "E", "E", "D"],
    ["E", "E", "E", "E", "E", "G", "G", "E", "E"],
    ["E", "E", "E", "H", "H", "H", "G", "G", "E"],
    ["E", "E", "I", "I", "I", "G", "G", "E", "E"],
    ["E", "I", "I", "I", "I", "G", "E", "E", "E"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: lightOrchid,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level267;
