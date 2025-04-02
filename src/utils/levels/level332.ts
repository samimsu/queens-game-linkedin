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

const level332 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "A", "B", "A"],
    ["A", "B", "C", "C", "D", "D", "B", "E"],
    ["A", "B", "B", "C", "D", "B", "B", "E"],
    ["A", "B", "B", "B", "B", "B", "B", "E"],
    ["A", "F", "F", "F", "F", "F", "F", "E"],
    ["A", "A", "G", "F", "F", "H", "E", "E"],
    ["A", "A", "G", "G", "H", "H", "E", "E"],
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

export default level332;
