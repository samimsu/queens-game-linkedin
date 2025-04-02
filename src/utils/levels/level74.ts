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

const level74 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "D", "B", "C", "C", "C", "C", "C"],
    ["D", "D", "B", "B", "B", "B", "E", "E"],
    ["D", "D", "D", "D", "F", "B", "E", "E"],
    ["D", "D", "B", "B", "B", "B", "G", "G"],
    ["D", "D", "D", "D", "D", "D", "D", "G"],
    ["D", "H", "D", "D", "D", "H", "D", "D"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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

export default level74;
