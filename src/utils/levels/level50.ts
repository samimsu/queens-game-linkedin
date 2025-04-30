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

const level50 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "A"],
    ["A", "D", "A", "A", "B", "B", "C", "A"],
    ["A", "D", "D", "A", "A", "B", "A", "A"],
    ["A", "A", "D", "D", "A", "A", "A", "A"],
    ["A", "E", "E", "F", "F", "G", "A", "A"],
    ["E", "E", "F", "F", "G", "G", "A", "A"],
    ["E", "H", "F", "A", "A", "A", "A", "A"],
    ["H", "H", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
  },
};

export default level50;
