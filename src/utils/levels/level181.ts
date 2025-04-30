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

const level181 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "A"],
    ["A", "C", "A", "A", "B", "B", "B", "A"],
    ["D", "D", "D", "A", "B", "B", "B", "A"],
    ["D", "D", "D", "A", "A", "A", "A", "A"],
    ["D", "D", "D", "A", "A", "A", "E", "E"],
    ["F", "F", "A", "A", "A", "A", "E", "E"],
    ["F", "F", "A", "G", "G", "A", "H", "A"],
    ["A", "A", "A", "G", "G", "A", "A", "A"],
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

export default level181;
