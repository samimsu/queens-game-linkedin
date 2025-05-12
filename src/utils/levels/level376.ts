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

const level376 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "D", "D", "D"],
    ["A", "E", "B", "B", "F", "C", "D", "E", "D"],
    ["A", "E", "B", "F", "F", "G", "G", "E", "D"],
    ["A", "E", "E", "F", "E", "G", "E", "E", "D"],
    ["A", "A", "E", "F", "E", "G", "E", "H", "H"],
    ["A", "A", "E", "E", "E", "E", "E", "H", "H"],
    ["I", "A", "E", "E", "I", "E", "E", "I", "I"],
    ["I", "I", "I", "E", "I", "E", "I", "I", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level376;
