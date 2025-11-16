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

const level564 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "A", "A", "B", "B", "D", "B"],
    ["A", "C", "C", "E", "E", "D", "D", "B"],
    ["A", "C", "F", "F", "E", "D", "D", "B"],
    ["A", "C", "F", "G", "E", "E", "D", "B"],
    ["A", "F", "F", "G", "G", "H", "H", "B"],
    ["A", "F", "A", "A", "B", "B", "H", "B"],
    ["A", "A", "A", "A", "B", "B", "B", "B"],
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

export default level564;
