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

const level15 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "A", "A"],
    ["A", "A", "A", "A", "B", "B", "B", "A"],
    ["C", "A", "A", "D", "E", "E", "E", "A"],
    ["C", "C", "A", "D", "D", "E", "A", "A"],
    ["C", "A", "A", "D", "A", "A", "A", "F"],
    ["A", "A", "G", "G", "G", "A", "F", "F"],
    ["A", "A", "A", "G", "A", "A", "H", "F"],
    ["A", "A", "A", "A", "A", "H", "H", "H"],
  ],
  regionColors: {
    A: halfBaked,
    B: chardonnay,
    C: celadon,
    D: bittersweet,
    E: lightOrchid,
    F: altoMain,
    G: anakiwa,
    H: lightWisteria,
  },
};

export default level15;
