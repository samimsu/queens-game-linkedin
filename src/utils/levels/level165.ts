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

const level165 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "D", "D", "B", "B", "C"],
    ["A", "D", "D", "D", "D", "B", "E", "C"],
    ["A", "D", "D", "D", "D", "E", "E", "C"],
    ["F", "D", "D", "D", "D", "D", "D", "C"],
    ["F", "D", "D", "D", "D", "D", "D", "G"],
    ["F", "D", "H", "H", "H", "D", "D", "G"],
    ["F", "F", "F", "H", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level165;
