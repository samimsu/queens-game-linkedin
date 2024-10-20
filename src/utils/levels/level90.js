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

const level90 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "B", "C", "D", "D", "D", "B"],
    ["A", "C", "B", "C", "D", "E", "D", "B"],
    ["A", "C", "C", "C", "D", "E", "D", "B"],
    ["A", "F", "G", "F", "H", "H", "H", "B"],
    ["A", "F", "G", "F", "H", "B", "B", "B"],
    ["A", "F", "F", "F", "H", "H", "H", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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

export default level90;
