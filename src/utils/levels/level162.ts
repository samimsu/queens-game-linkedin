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

const level162 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "A", "D", "B", "E", "E"],
    ["C", "F", "D", "D", "D", "G", "E", "E"],
    ["F", "F", "F", "D", "G", "G", "G", "E"],
    ["F", "F", "F", "H", "H", "G", "E", "E"],
    ["F", "F", "H", "H", "H", "H", "E", "E"],
    ["F", "H", "H", "H", "H", "H", "H", "E"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: nomad,
    H: saharaSand,
  },
};

export default level162;
