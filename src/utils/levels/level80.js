import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria
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
    ["A", "A", "A", "G", "G", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: halfBaked,
    D: bittersweet,
    E: anakiwa,
    F: celadon,
    G: lightOrchid,
    H: chardonnay,
  },
};

export default level80;
