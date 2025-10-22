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

const level540 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "E", "E", "B", "F", "C", "F"],
    ["A", "D", "E", "E", "B", "F", "C", "F"],
    ["D", "D", "E", "E", "B", "F", "F", "F"],
    ["D", "D", "E", "G", "G", "H", "H", "H"],
    ["D", "D", "G", "G", "G", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "H", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G"],
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

export default level540;
