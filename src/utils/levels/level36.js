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

const level36 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "C"],
    ["A", "A", "A", "B", "B", "D", "D", "E", "C"],
    ["A", "A", "C", "B", "B", "E", "D", "E", "C"],
    ["A", "C", "C", "B", "E", "E", "E", "E", "C"],
    ["C", "C", "C", "F", "E", "E", "C", "C", "C"],
    ["C", "G", "H", "F", "F", "C", "C", "C", "I"],
    ["C", "G", "H", "H", "C", "C", "C", "I", "I"],
    ["C", "G", "G", "H", "C", "C", "I", "I", "I"],
    ["C", "C", "C", "C", "C", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: altoMain,
    D: anakiwa,
    E: celadon,
    F: bittersweet,
    G: lightOrchid,
    H: halfBaked,
    I: chardonnay,
  },
};

export default level36;
