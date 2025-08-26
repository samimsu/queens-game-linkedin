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

const level482 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "D", "B", "B", "C", "C", "C"],
    ["B", "B", "D", "B", "E", "C", "C", "C"],
    ["B", "B", "B", "B", "E", "C", "F", "C"],
    ["B", "G", "B", "B", "C", "C", "F", "C"],
    ["B", "G", "B", "H", "C", "C", "C", "C"],
    ["B", "B", "B", "H", "C", "C", "C", "C"],
    ["B", "B", "C", "C", "C", "C", "C", "C"],
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

export default level482;
