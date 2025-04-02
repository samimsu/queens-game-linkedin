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

const level328 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "B", "A", "A", "A", "C"],
    ["D", "B", "A", "B", "A", "B", "A", "C"],
    ["D", "B", "B", "B", "B", "B", "B", "C"],
    ["D", "E", "B", "B", "B", "B", "B", "C"],
    ["D", "E", "E", "B", "B", "B", "F", "C"],
    ["D", "E", "E", "G", "G", "H", "F", "C"],
    ["D", "E", "E", "G", "G", "H", "F", "C"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level328;
