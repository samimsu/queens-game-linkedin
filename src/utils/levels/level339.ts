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

const level339 = {
  size: 9,
  colorRegions: [
    ["A", "B", "C", "C", "C", "D", "D", "D", "D"],
    ["A", "B", "C", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "C", "B", "C", "C", "C", "C", "D"],
    ["A", "B", "B", "B", "B", "C", "D", "D", "D"],
    ["A", "E", "E", "B", "F", "G", "D", "D", "D"],
    ["A", "A", "E", "E", "E", "G", "D", "D", "D"],
    ["H", "H", "E", "E", "E", "G", "D", "G", "D"],
    ["H", "H", "E", "E", "E", "G", "G", "G", "G"],
    ["H", "H", "H", "H", "H", "H", "H", "G", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
};

export default level339;
