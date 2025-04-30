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

const level347 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "D", "E", "E", "A", "B"],
    ["A", "C", "D", "D", "D", "E", "B", "B"],
    ["A", "C", "C", "D", "E", "E", "B", "B"],
    ["A", "F", "F", "G", "G", "B", "B", "B"],
    ["A", "F", "G", "G", "H", "H", "B", "B"],
    ["A", "F", "F", "G", "H", "H", "H", "B"],
    ["A", "A", "H", "H", "H", "H", "B", "B"],
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

export default level347;
