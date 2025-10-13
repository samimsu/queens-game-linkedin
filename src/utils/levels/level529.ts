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

const level529 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "E", "E", "E"],
    ["B", "B", "B", "B", "D", "D", "D", "E"],
    ["C", "C", "C", "D", "D", "D", "D", "E"],
    ["D", "D", "D", "D", "D", "D", "D", "E"],
    ["D", "D", "D", "E", "E", "E", "E", "E"],
    ["D", "E", "E", "E", "E", "F", "F", "F"],
    ["D", "E", "E", "E", "G", "G", "G", "G"],
    ["D", "E", "E", "E", "E", "E", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: anakiwa,
    C: altoMain,
    D: celadon,
    E: chardonnay,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  isNew: true,
};

export default level529;
