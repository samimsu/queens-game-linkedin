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

const level83 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "A"],
    ["C", "D", "B", "B", "B", "B", "E", "F"],
    ["C", "D", "D", "B", "B", "E", "E", "F"],
    ["C", "C", "C", "B", "B", "E", "F", "F"],
    ["G", "G", "B", "B", "B", "B", "F", "H"],
    ["G", "B", "B", "B", "B", "B", "B", "H"],
    ["G", "G", "G", "G", "H", "H", "H", "H"],
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

export default level83;
