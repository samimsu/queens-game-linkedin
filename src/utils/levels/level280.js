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

const level280 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C"],
    ["B", "B", "B", "D", "D", "D", "C", "C"],
    ["B", "B", "D", "D", "D", "D", "D", "D"],
    ["B", "D", "D", "D", "E", "E", "E", "D"],
    ["F", "F", "F", "F", "G", "G", "E", "D"],
    ["F", "F", "F", "F", "G", "H", "H", "H"],
    ["F", "F", "F", "F", "G", "H", "H", "H"],
    ["F", "F", "F", "F", "G", "H", "H", "H"],
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

export default level280;
