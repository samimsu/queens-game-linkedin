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

const level209 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "A", "A"],
    ["C", "C", "C", "C", "A", "B", "A", "D"],
    ["A", "A", "A", "A", "A", "B", "A", "D"],
    ["A", "E", "E", "E", "A", "B", "A", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "F", "A", "G", "A", "H", "H", "H"],
    ["A", "F", "A", "G", "A", "A", "A", "A"],
    ["A", "A", "A", "G", "A", "A", "A", "A"],
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

export default level209;
