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

const level81 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "D"],
    ["E", "F", "B", "B", "B", "B", "G", "D"],
    ["E", "F", "F", "F", "G", "G", "G", "D"],
    ["E", "F", "H", "F", "G", "H", "G", "D"],
    ["E", "E", "H", "H", "H", "H", "D", "D"],
  ],
  regionColors: {
    A: bittersweet,
    B: altoMain,
    C: feijoa,
    D: lightOrchid,
    E: celadon,
    F: anakiwa,
    G: chardonnay,
    H: lightWisteria,
  },
};

export default level81;
