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

const level16 = {
  size: 9,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "C", "B", "B", "B", "B", "B", "D"],
    ["A", "B", "C", "B", "E", "E", "E", "B", "D"],
    ["A", "B", "F", "B", "E", "B", "E", "B", "D"],
    ["G", "B", "F", "B", "E", "B", "H", "B", "D"],
    ["G", "B", "F", "B", "B", "B", "H", "B", "D"],
    ["G", "B", "F", "F", "H", "H", "H", "B", "I"],
    ["G", "B", "B", "B", "B", "B", "B", "B", "I"],
    ["G", "G", "G", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: saharaSand,
    B: altoMain,
    C: celadon,
    D: halfBaked,
    E: lightWisteria,
    F: anakiwa,
    G: bittersweet,
    H: chardonnay,
    I: lightOrchid,
  },
};

export default level16;
