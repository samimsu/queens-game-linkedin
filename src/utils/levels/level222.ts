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

const level222 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "C"],
    ["D", "A", "A", "B", "B", "E", "E", "C", "C"],
    ["D", "D", "A", "F", "F", "E", "C", "C", "D"],
    ["D", "F", "F", "F", "F", "C", "C", "D", "D"],
    ["D", "F", "D", "D", "D", "D", "D", "D", "G"],
    ["D", "D", "D", "H", "H", "D", "I", "G", "G"],
    ["D", "D", "H", "H", "D", "D", "I", "I", "G"],
    ["D", "H", "H", "D", "D", "D", "D", "I", "I"],
    ["H", "H", "D", "D", "D", "D", "D", "D", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level222;
