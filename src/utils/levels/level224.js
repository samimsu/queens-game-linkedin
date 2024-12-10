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

const level224 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "B", "B"],
    ["A", "C", "C", "D", "C", "C", "C", "C", "B"],
    ["A", "D", "D", "D", "C", "E", "E", "C", "B"],
    ["A", "C", "C", "C", "C", "E", "C", "C", "B"],
    ["A", "F", "C", "G", "C", "C", "C", "B", "B"],
    ["H", "F", "F", "C", "C", "C", "B", "B", "B"],
    ["H", "F", "H", "H", "C", "I", "I", "B", "B"],
    ["H", "H", "H", "H", "H", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: bittersweet,
    D: celadon,
    E: chardonnay,
    F: nomad,
    G: saharaSand,
    H: anakiwa,
    I: altoMain,
  },
};

export default level224;
