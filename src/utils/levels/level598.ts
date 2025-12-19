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

const level598 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["C", "C", "C", "C", "C", "A", "C", "B"],
    ["C", "D", "D", "D", "C", "A", "C", "B"],
    ["C", "D", "C", "E", "C", "A", "C", "B"],
    ["C", "F", "C", "E", "C", "A", "C", "B"],
    ["C", "F", "C", "C", "C", "G", "C", "H"],
    ["C", "F", "F", "G", "G", "G", "C", "H"],
    ["C", "C", "C", "C", "C", "C", "C", "H"],
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
  isNew: true,
};

export default level598;
