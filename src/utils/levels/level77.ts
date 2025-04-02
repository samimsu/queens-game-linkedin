import {
  altoMain,
  anakiwa,
  bittersweet,
  canCan,
  celadon,
  chardonnay,
  feijoa,
  lightWisteria,
} from "../colors";

const level77 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "A", "C", "C", "C"],
    ["A", "D", "B", "B", "A", "C", "C", "C"],
    ["A", "E", "E", "A", "A", "C", "C", "C"],
    ["A", "E", "E", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "F", "F", "F", "A", "A"],
    ["A", "A", "A", "F", "F", "F", "A", "A"],
    ["H", "H", "A", "F", "F", "F", "G", "A"],
    ["H", "H", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: canCan,
    G: bittersweet,
    H: feijoa,
  },
};

export default level77;
