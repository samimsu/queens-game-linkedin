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

const level1 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "D", "B", "E", "C", "C"],
    ["A", "D", "B", "D", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "F", "G", "C"],
    ["A", "D", "D", "D", "B", "F", "G", "G"],
    ["A", "D", "H", "D", "B", "F", "G", "G"],
    ["H", "D", "H", "D", "B", "F", "F", "G"],
    ["H", "H", "H", "H", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightWisteria,
    C: altoMain,
    D: bittersweet,
    E: chardonnay,
    F: celadon,
    G: lightOrchid,
    H: halfBaked,
  },
};

export default level1;
