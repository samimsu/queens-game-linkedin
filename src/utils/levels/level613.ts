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

const level613 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "C", "B"],
    ["D", "A", "A", "A", "C", "C", "C", "B"],
    ["D", "E", "A", "A", "C", "C", "C", "F"],
    ["D", "E", "E", "E", "G", "G", "C", "F"],
    ["D", "E", "E", "E", "G", "H", "F", "F"],
    ["D", "E", "E", "E", "E", "H", "H", "H"],
    ["D", "D", "D", "D", "D", "D", "H", "H"],
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

export default level613;
