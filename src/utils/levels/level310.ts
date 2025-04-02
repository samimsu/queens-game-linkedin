import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level310 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "C", "D"],
    ["A", "B", "B", "B", "B", "B", "B", "C", "D"],
    ["A", "B", "B", "E", "B", "B", "B", "C", "D"],
    ["A", "A", "B", "E", "B", "B", "B", "C", "D"],
    ["F", "F", "B", "E", "B", "B", "C", "C", "D"],
    ["F", "B", "B", "E", "B", "B", "B", "D", "D"],
    ["F", "B", "B", "E", "B", "B", "B", "G", "G"],
    ["F", "B", "H", "E", "E", "I", "I", "I", "G"],
    ["F", "B", "H", "H", "H", "H", "H", "I", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: nomad,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: anakiwa,
    I: chardonnay,
  },
};

export default level310;
