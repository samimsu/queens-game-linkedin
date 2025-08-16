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

const level473 = {
  size: 8,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "D", "E"],
    ["A", "B", "C", "A", "D", "C", "D", "E"],
    ["A", "B", "C", "A", "D", "C", "D", "D"],
    ["A", "A", "C", "A", "D", "C", "D", "D"],
    ["A", "A", "A", "A", "D", "D", "D", "D"],
    ["A", "A", "F", "D", "D", "G", "D", "D"],
    ["A", "A", "F", "F", "H", "G", "G", "D"],
    ["A", "A", "A", "F", "H", "H", "G", "D"],
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

export default level473;
