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

const level64 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "A"],
    ["A", "B", "C", "C", "C", "C", "B", "D"],
    ["A", "B", "E", "F", "F", "C", "B", "D"],
    ["A", "B", "E", "G", "F", "C", "B", "D"],
    ["A", "H", "E", "G", "G", "G", "B", "D"],
    ["A", "H", "E", "E", "E", "B", "B", "D"],
    ["A", "H", "H", "H", "H", "H", "D", "D"],
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

export default level64;
