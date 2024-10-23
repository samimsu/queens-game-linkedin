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

const level105 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "B", "B", "B", "B", "B"],
    ["D", "C", "E", "E", "E", "B", "B", "B"],
    ["D", "D", "E", "F", "F", "F", "B", "B"],
    ["D", "D", "D", "F", "G", "G", "G", "G"],
    ["D", "D", "D", "F", "G", "H", "H", "H"],
    ["D", "D", "H", "H", "G", "H", "H", "H"],
    ["D", "H", "H", "H", "H", "H", "H", "H"],
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

export default level105;
