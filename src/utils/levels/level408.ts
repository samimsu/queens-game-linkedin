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

const level1 = {
  size: 9,
  colorRegions: [
    ["A", "B", "A", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "A", "C", "E", "E", "E", "E", "C"],
    ["A", "A", "A", "F", "F", "F", "E", "E", "C"],
    ["G", "G", "A", "F", "E", "E", "E", "E", "E"],
    ["G", "G", "A", "F", "F", "F", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "F", "H", "I", "I"],
    ["G", "G", "G", "F", "F", "F", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "G", "H", "J", "H"],
    ["G", "G", "G", "G", "G", "G", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    E: celadon,
    F: altoMain,
    G: bittersweet,
    H: saharaSand,
    I: nomad,
    J: anakiwa,
  },
};

export default level1;
