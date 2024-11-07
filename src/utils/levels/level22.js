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

const level22 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "C", "A", "A"],
    ["A", "A", "B", "C", "B", "C", "A", "A"],
    ["D", "D", "C", "C", "C", "C", "E", "E"],
    ["D", "F", "F", "C", "C", "G", "G", "E"],
    ["D", "D", "F", "C", "C", "C", "G", "E"],
    ["H", "F", "F", "H", "C", "G", "G", "E"],
    ["H", "H", "H", "H", "C", "C", "E", "E"],
  ],
  regionColors: {
    A: celadon,
    B: anakiwa,
    C: altoMain,
    D: lightWisteria,
    E: halfBaked,
    F: chardonnay,
    G: bittersweet,
    H: lightOrchid,
  },
};

export default level22;
