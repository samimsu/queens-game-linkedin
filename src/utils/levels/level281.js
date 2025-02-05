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

const level281 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "D", "B", "D", "B"],
    ["A", "A", "C", "D", "D", "D", "D", "D"],
    ["A", "A", "C", "D", "E", "D", "E", "D"],
    ["A", "C", "C", "C", "E", "D", "E", "F"],
    ["A", "G", "G", "G", "E", "H", "E", "F"],
    ["A", "G", "A", "G", "E", "E", "E", "F"],
    ["A", "A", "A", "G", "G", "F", "F", "F"],
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

export default level281;
