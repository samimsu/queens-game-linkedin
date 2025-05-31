import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level385 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "D", "B", "B", "B", "B"],
    ["B", "B", "B", "D", "D", "D", "B", "B"],
    ["B", "B", "B", "E", "E", "D", "B", "B"],
    ["B", "E", "E", "E", "F", "F", "B", "G"],
    ["B", "B", "B", "B", "B", "F", "B", "G"],
    ["H", "H", "H", "B", "F", "F", "B", "G"],
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
  },
};

export default level385;
