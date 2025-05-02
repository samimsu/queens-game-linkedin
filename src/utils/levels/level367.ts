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

const level367 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "D", "D", "C", "C", "E", "F", "B"],
    ["A", "G", "D", "C", "C", "E", "F", "F"],
    ["G", "G", "G", "C", "C", "E", "E", "F"],
    ["H", "H", "G", "C", "C", "E", "E", "E"],
    ["C", "H", "C", "C", "C", "C", "E", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
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

export default level367;
