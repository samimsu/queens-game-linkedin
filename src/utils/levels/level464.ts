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

const level464 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "B"],
    ["A", "C", "D", "D", "D", "D", "E", "B"],
    ["A", "D", "D", "F", "F", "D", "D", "B"],
    ["A", "D", "D", "F", "F", "D", "D", "D"],
    ["A", "G", "D", "D", "D", "D", "H", "A"],
    ["A", "G", "G", "D", "D", "H", "H", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level464;
