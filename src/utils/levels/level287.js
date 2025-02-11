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

const level287 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "D", "D"],
    ["A", "A", "E", "B", "C", "C", "C", "D"],
    ["A", "A", "E", "E", "C", "C", "C", "D"],
    ["A", "A", "F", "E", "G", "C", "D", "D"],
    ["A", "F", "F", "F", "G", "G", "D", "D"],
    ["A", "A", "F", "H", "H", "D", "D", "D"],
    ["A", "A", "A", "H", "H", "H", "D", "D"],
    ["A", "A", "A", "H", "H", "D", "D", "D"],
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

export default level287;
