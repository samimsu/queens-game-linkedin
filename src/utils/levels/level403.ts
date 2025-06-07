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

const level403 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "E", "E", "B"],
    ["C", "C", "D", "D", "F", "D", "D", "E", "E"],
    ["C", "D", "D", "D", "F", "D", "D", "D", "E"],
    ["C", "D", "G", "G", "G", "D", "D", "D", "E"],
    ["C", "D", "D", "D", "D", "D", "D", "D", "E"],
    ["C", "H", "D", "D", "D", "D", "D", "I", "E"],
    ["C", "H", "H", "D", "D", "D", "I", "I", "E"],
    ["C", "C", "H", "H", "H", "H", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
  isNew: true,
};

export default level403;
