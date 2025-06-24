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

const level420 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "D", "D"],
    ["A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "E", "E", "E", "E", "F", "F", "D"],
    ["A", "E", "G", "G", "H", "H", "F", "D"],
    ["A", "E", "G", "G", "H", "H", "F", "D"],
    ["A", "E", "E", "E", "E", "F", "F", "D"],
    ["A", "A", "A", "D", "D", "D", "D", "D"],
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

export default level420;
