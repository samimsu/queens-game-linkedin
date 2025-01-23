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

const level268 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "C", "B", "B", "B", "C", "D", "B"],
    ["A", "E", "C", "B", "B", "B", "C", "D", "D"],
    ["E", "E", "C", "C", "B", "C", "C", "D", "D"],
    ["E", "F", "C", "C", "C", "C", "C", "D", "D"],
    ["F", "F", "G", "G", "C", "H", "H", "H", "H"],
    ["F", "G", "G", "G", "C", "H", "H", "H", "H"],
    ["F", "I", "I", "C", "C", "C", "H", "H", "H"],
    ["I", "I", "C", "C", "C", "C", "C", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level268;
