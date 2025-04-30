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

const level45 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "A", "A", "A"],
    ["C", "A", "A", "A", "A", "A", "D", "A"],
    ["C", "C", "A", "A", "A", "D", "D", "A"],
    ["A", "A", "A", "E", "A", "A", "A", "A"],
    ["F", "A", "E", "E", "A", "A", "A", "G"],
    ["F", "A", "A", "A", "A", "A", "G", "G"],
    ["F", "A", "A", "H", "H", "A", "A", "A"],
    ["A", "A", "A", "H", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: halfBaked,
    D: anakiwa,
    E: lightOrchid,
    F: celadon,
    G: altoMain,
    H: bittersweet,
  },
};

export default level45;
