import {
  altoMain,
  anakiwa,
  bittersweet,
  canCan,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
} from "../colors";

const level80 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "C", "C", "C", "D"],
    ["A", "B", "E", "E", "E", "F", "C", "D"],
    ["A", "G", "E", "H", "H", "F", "C", "D"],
    ["A", "G", "F", "H", "H", "F", "C", "D"],
    ["A", "G", "F", "F", "F", "F", "G", "D"],
    ["A", "G", "G", "G", "G", "G", "G", "D"],
    ["A", "G", "G", "G", "G", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: nomad,
    D: bittersweet,
    E: anakiwa,
    F: celadon,
    G: canCan,
    H: chardonnay,
  },
};

export default level80;
