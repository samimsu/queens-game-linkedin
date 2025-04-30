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

const level49 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "D", "A", "A", "A"],
    ["A", "B", "B", "C", "D", "A", "A", "A"],
    ["A", "E", "E", "E", "D", "A", "A", "A"],
    ["A", "E", "E", "E", "D", "A", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "G", "G"],
    ["H", "H", "H", "H", "H", "H", "G", "G"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: altoMain,
    D: celadon,
    E: anakiwa,
    F: halfBaked,
    G: lightOrchid,
    H: bittersweet,
  },
};

export default level49;
