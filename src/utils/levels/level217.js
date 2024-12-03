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

const level217 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "A", "C", "C", "A"],
    ["D", "B", "D", "A", "A", "E", "C", "F"],
    ["D", "B", "D", "A", "A", "E", "E", "F"],
    ["D", "D", "D", "A", "A", "F", "E", "F"],
    ["G", "H", "H", "A", "A", "F", "E", "F"],
    ["G", "H", "H", "A", "A", "F", "E", "F"],
    ["G", "G", "G", "G", "F", "F", "F", "F"],
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

export default level217;
