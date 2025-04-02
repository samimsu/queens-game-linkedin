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

const level42 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "C", "D", "D", "B", "B"],
    ["A", "A", "C", "C", "D", "D", "D", "B"],
    ["A", "C", "C", "E", "E", "D", "D", "B"],
    ["A", "F", "F", "E", "E", "G", "G", "B"],
    ["A", "A", "F", "F", "G", "G", "B", "B"],
    ["A", "A", "A", "F", "G", "B", "B", "H"],
    ["A", "A", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightOrchid,
    C: lightWisteria,
    D: chardonnay,
    E: altoMain,
    F: celadon,
    G: anakiwa,
    H: bittersweet,
  },
};

export default level42;
