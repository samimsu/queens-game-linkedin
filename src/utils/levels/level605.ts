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

const level605 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "D"],
    ["A", "B", "B", "B", "C", "C", "D", "D"],
    ["B", "B", "B", "C", "C", "E", "D", "F"],
    ["B", "B", "C", "C", "E", "E", "F", "F"],
    ["B", "C", "C", "E", "E", "F", "F", "G"],
    ["C", "C", "C", "E", "E", "E", "H", "G"],
    ["C", "C", "C", "E", "E", "H", "H", "G"],
    ["E", "E", "E", "E", "H", "H", "G", "G"],
  ],
  regionColors: {
    A: saharaSand,
    B: nomad,
    C: bittersweet,
    D: anakiwa,
    E: altoMain,
    F: celadon,
    G: chardonnay,
    H: lightWisteria,
  },
};

export default level605;
