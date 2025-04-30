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

const level308 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "D", "D", "D"],
    ["A", "B", "B", "B", "E", "C", "C", "C", "D"],
    ["A", "B", "F", "E", "E", "C", "F", "C", "D"],
    ["A", "F", "F", "F", "E", "F", "F", "F", "D"],
    ["A", "F", "G", "F", "F", "F", "H", "F", "D"],
    ["A", "F", "G", "F", "I", "F", "H", "F", "D"],
    ["A", "F", "F", "F", "I", "F", "F", "F", "D"],
    ["A", "A", "F", "A", "A", "A", "F", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: chardonnay,
    G: bittersweet,
    H: nomad,
    I: celadon,
  },
};

export default level308;
