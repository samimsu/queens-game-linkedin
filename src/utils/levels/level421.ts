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

const level421 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "C", "D", "D", "D", "D", "D"],
    ["A", "B", "C", "C", "C", "D", "D", "D", "D"],
    ["A", "E", "F", "F", "C", "D", "D", "E", "D"],
    ["A", "E", "E", "F", "F", "G", "E", "E", "D"],
    ["A", "A", "E", "E", "F", "E", "E", "D", "D"],
    ["A", "A", "A", "E", "E", "E", "H", "I", "D"],
    ["A", "A", "A", "A", "E", "H", "H", "I", "D"],
    ["A", "A", "A", "A", "E", "H", "I", "I", "D"],
    ["A", "A", "E", "E", "E", "E", "E", "D", "D"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: celadon,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
};

export default level421;
