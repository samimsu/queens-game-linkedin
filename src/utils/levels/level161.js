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

const level161 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "C", "C", "A", "B", "A", "D", "D", "A"],
    ["A", "C", "C", "A", "A", "A", "E", "E", "A"],
    ["A", "A", "C", "C", "C", "F", "F", "E", "A"],
    ["G", "A", "A", "A", "A", "F", "A", "A", "A"],
    ["G", "G", "G", "G", "A", "F", "F", "F", "F"],
    ["G", "G", "H", "G", "A", "A", "A", "F", "F"],
    ["G", "H", "H", "H", "I", "I", "A", "A", "F"],
    ["G", "G", "G", "G", "G", "G", "G", "A", "A"],
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

export default level161;
