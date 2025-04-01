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

const level330 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "B", "B"],
    ["A", "C", "C", "D", "D", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "D", "C", "B"],
    ["E", "C", "D", "D", "D", "D", "C", "B"],
    ["E", "C", "C", "D", "D", "C", "C", "F"],
    ["G", "G", "C", "C", "C", "C", "F", "F"],
    ["G", "H", "H", "H", "F", "F", "F", "F"],
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

export default level330;
