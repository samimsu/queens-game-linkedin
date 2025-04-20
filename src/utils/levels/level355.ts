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

const level355 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["C", "A", "A", "D", "A", "A", "A", "B", "B"],
    ["C", "A", "E", "D", "A", "A", "A", "A", "B"],
    ["C", "A", "E", "D", "F", "G", "A", "B", "B"],
    ["C", "A", "E", "F", "F", "G", "H", "B", "B"],
    ["C", "C", "E", "F", "F", "G", "H", "B", "B"],
    ["I", "I", "E", "F", "F", "G", "H", "B", "B"],
    ["I", "I", "I", "F", "F", "G", "B", "B", "B"],
    ["I", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: anakiwa,
    I: saharaSand,
  },
};

export default level355;
