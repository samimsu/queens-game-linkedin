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

const level44 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "D", "B", "B"],
    ["A", "C", "C", "E", "E", "D", "D", "B"],
    ["A", "C", "E", "E", "E", "E", "F", "B"],
    ["A", "C", "E", "E", "E", "E", "F", "G"],
    ["A", "C", "H", "E", "E", "F", "F", "G"],
    ["A", "A", "H", "H", "F", "F", "G", "G"],
    ["A", "A", "A", "A", "A", "G", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: halfBaked,
    C: anakiwa,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: lightOrchid,
    H: altoMain,
  },
};

export default level44;
