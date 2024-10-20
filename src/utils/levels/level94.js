import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level94 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "D"],
    ["A", "B", "B", "B", "B", "B", "C", "C", "D"],
    ["A", "B", "B", "B", "E", "B", "B", "C", "D"],
    ["B", "B", "B", "B", "E", "B", "B", "C", "D"],
    ["B", "F", "F", "F", "E", "E", "B", "B", "D"],
    ["B", "F", "G", "F", "F", "E", "E", "B", "H"],
    ["B", "B", "G", "B", "B", "B", "B", "B", "H"],
    ["B", "B", "G", "B", "B", "I", "I", "I", "H"],
    ["G", "G", "G", "I", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: halfBaked,
    B: altoMain,
    C: celadon,
    D: anakiwa,
    E: bittersweet,
    F: lightOrchid,
    G: saharaSand,
    H: chardonnay,
    I: lightWisteria,
  },
};

export default level94;
