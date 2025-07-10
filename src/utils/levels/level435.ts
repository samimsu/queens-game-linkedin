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

const level435 = {
  size: 8,
  colorRegions: [
    ["A", "B", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "B", "C", "D", "D", "D", "D"],
    ["A", "B", "E", "E", "E", "E", "D", "D"],
    ["A", "E", "E", "E", "E", "E", "E", "D"],
    ["A", "A", "E", "F", "F", "E", "D", "D"],
    ["A", "A", "A", "G", "G", "D", "D", "D"],
    ["A", "A", "A", "G", "G", "D", "D", "D"],
    ["A", "A", "H", "H", "H", "H", "D", "D"],
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

export default level435;
