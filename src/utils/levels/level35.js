import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level35 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "C", "A", "D"],
    ["A", "A", "E", "B", "C", "C", "C", "D"],
    ["A", "E", "E", "E", "F", "C", "D", "D"],
    ["A", "A", "E", "F", "F", "F", "G", "D"],
    ["A", "H", "H", "H", "F", "G", "G", "D"],
    ["A", "A", "A", "H", "H", "H", "D", "D"],
  ],
  regionColors: {
    A: altoMain,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: celadon,
    F: halfBaked,
    G: lightWisteria,
    H: bittersweet,
  },
};

export default level35;
