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

const level382 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "E", "A", "A", "C", "C", "A", "D"],
    ["A", "A", "E", "A", "A", "A", "A", "A", "D"],
    ["F", "A", "A", "A", "G", "G", "G", "A", "D"],
    ["F", "F", "F", "A", "G", "F", "G", "A", "H"],
    ["F", "I", "F", "F", "I", "F", "G", "A", "H"],
    ["F", "I", "F", "F", "I", "F", "G", "A", "H"],
    ["F", "I", "I", "I", "I", "F", "H", "H", "H"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level382;
