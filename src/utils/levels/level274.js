import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level274 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "C", "C", "C", "A"],
    ["D", "D", "D", "B", "C", "E", "A", "A"],
    ["D", "F", "D", "B", "B", "E", "A", "A"],
    ["D", "D", "D", "G", "G", "E", "A", "A"],
    ["D", "H", "H", "H", "G", "E", "E", "E"],
    ["H", "H", "H", "H", "G", "G", "H", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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
  },
};

export default level274;
