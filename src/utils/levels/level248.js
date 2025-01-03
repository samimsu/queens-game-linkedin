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

const level248 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "A", "D", "B", "E", "B", "F", "B", "E"],
    ["C", "D", "D", "B", "E", "B", "F", "B", "E"],
    ["C", "C", "D", "B", "E", "F", "F", "F", "E"],
    ["C", "C", "C", "B", "E", "E", "E", "E", "E"],
    ["C", "G", "C", "B", "B", "B", "B", "B", "B"],
    ["G", "G", "C", "C", "C", "C", "H", "H", "H"],
    ["G", "I", "I", "I", "H", "C", "H", "H", "H"],
    ["I", "I", "I", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: lightOrchid,
    I: lightWisteria,
  },
};

export default level248;
