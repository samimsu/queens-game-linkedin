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

const level43 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C"],
    ["C", "C", "C", "B", "B", "B", "B", "C"],
    ["C", "D", "D", "D", "E", "E", "C", "C"],
    ["C", "D", "F", "G", "G", "E", "E", "C"],
    ["C", "D", "F", "G", "G", "G", "E", "C"],
    ["C", "C", "F", "F", "H", "H", "H", "C"],
    ["C", "C", "C", "F", "H", "C", "H", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: halfBaked,
    B: anakiwa,
    C: altoMain,
    D: celadon,
    E: chardonnay,
    F: bittersweet,
    G: lightWisteria,
    H: lightOrchid,
  },
};

export default level43;
