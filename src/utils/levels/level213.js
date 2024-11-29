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

const level213 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "C", "D"],
    ["A", "B", "E", "E", "E", "E", "E", "C", "D"],
    ["A", "B", "E", "F", "F", "F", "E", "C", "D"],
    ["A", "D", "E", "F", "G", "F", "E", "C", "D"],
    ["A", "D", "H", "F", "G", "G", "E", "C", "D"],
    ["A", "D", "H", "E", "E", "E", "E", "I", "D"],
    ["A", "D", "H", "H", "H", "H", "I", "I", "D"],
    ["A", "D", "D", "D", "D", "D", "D", "D", "D"],
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

export default level213;
