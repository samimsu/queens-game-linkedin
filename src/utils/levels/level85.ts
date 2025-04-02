import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  feijoa,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level85 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "A", "B", "B", "D", "C", "C", "C"],
    ["A", "B", "B", "D", "D", "C", "C", "C"],
    ["B", "B", "D", "D", "E", "F", "C", "C"],
    ["B", "D", "D", "E", "E", "F", "G", "C"],
    ["H", "H", "H", "F", "F", "F", "G", "C"],
    ["C", "C", "H", "H", "G", "G", "G", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: feijoa,
    H: bittersweet,
  },
};

export default level85;
