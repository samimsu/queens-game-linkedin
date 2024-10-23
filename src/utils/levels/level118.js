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

const level118 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "C", "D", "D", "D", "E"],
    ["A", "A", "B", "C", "C", "D", "D", "E"],
    ["F", "A", "A", "A", "A", "D", "D", "E"],
    ["F", "F", "A", "A", "A", "A", "D", "E"],
    ["G", "G", "A", "A", "A", "A", "D", "A"],
    ["H", "G", "A", "A", "A", "A", "A", "A"],
    ["H", "H", "H", "A", "A", "A", "A", "A"],
    ["H", "H", "H", "H", "H", "A", "A", "A"],
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

export default level118;
