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

const level27 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "A", "A", "A", "A"],
    ["C", "A", "B", "B", "D", "D", "D", "A"],
    ["C", "A", "B", "B", "D", "D", "D", "A"],
    ["C", "A", "A", "A", "A", "A", "E", "A"],
    ["F", "F", "G", "G", "G", "A", "E", "A"],
    ["F", "F", "A", "A", "A", "A", "E", "A"],
    ["F", "F", "A", "A", "A", "A", "A", "A"],
    ["H", "H", "H", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: altoMain,
    B: celadon,
    C: lightOrchid,
    D: bittersweet,
    E: chardonnay,
    F: halfBaked,
    G: anakiwa,
    H: lightWisteria,
  },
};

export default level27;
