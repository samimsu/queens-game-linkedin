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

const level278 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "A", "A", "A"],
    ["C", "C", "A", "B", "B", "B", "A", "A", "A"],
    ["C", "D", "D", "B", "B", "B", "E", "A", "E"],
    ["C", "C", "D", "D", "B", "E", "E", "E", "E"],
    ["F", "C", "F", "D", "B", "E", "G", "H", "E"],
    ["F", "F", "F", "F", "B", "I", "G", "H", "H"],
    ["F", "F", "F", "F", "B", "I", "G", "G", "H"],
    ["F", "F", "F", "F", "B", "I", "I", "G", "H"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: saharaSand,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: anakiwa,
    H: bittersweet,
    I: lightWisteria,
  },
};

export default level278;
