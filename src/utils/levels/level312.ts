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

const level312 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "A", "E", "E", "E", "B", "B", "C"],
    ["A", "D", "E", "E", "F", "E", "E", "B", "C"],
    ["A", "D", "E", "E", "F", "E", "E", "B", "C"],
    ["D", "D", "D", "E", "E", "E", "G", "G", "C"],
    ["D", "D", "H", "H", "E", "I", "I", "G", "G"],
    ["D", "D", "H", "E", "E", "E", "I", "I", "G"],
    ["D", "D", "H", "H", "E", "H", "H", "H", "G"],
    ["D", "H", "H", "H", "H", "H", "H", "H", "G"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: lightWisteria,
    F: bittersweet,
    G: saharaSand,
    H: altoMain,
    I: nomad,
  },
};

export default level312;
