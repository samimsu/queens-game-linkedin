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

const level295 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["D", "D", "A", "E", "E", "B", "C", "C"],
    ["D", "A", "A", "A", "B", "B", "B", "C"],
    ["D", "D", "A", "C", "C", "B", "C", "C"],
    ["F", "F", "F", "C", "C", "C", "C", "C"],
    ["G", "G", "F", "C", "C", "C", "H", "C"],
    ["G", "F", "F", "F", "C", "H", "H", "C"],
    ["G", "G", "F", "C", "C", "C", "H", "C"],
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

export default level295;
