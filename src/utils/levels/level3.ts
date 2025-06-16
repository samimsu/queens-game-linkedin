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

const level3 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "C", "B", "B", "D"],
    ["A", "A", "A", "B", "C", "C", "B", "D"],
    ["B", "B", "B", "B", "B", "C", "B", "D"],
    ["E", "E", "E", "B", "B", "B", "B", "D"],
    ["E", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "F", "B", "B", "G"],
    ["H", "H", "B", "F", "F", "B", "G", "G"],
    ["H", "H", "B", "F", "B", "B", "B", "G"],
  ],
  regionColors: {
    A: anakiwa,
    B: halfBaked,
    C: celadon,
    D: altoMain,
    E: chardonnay,
    F: bittersweet,
    G: lightOrchid,
    H: lightWisteria,
  },
};

export default level3;
