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

const level275 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "A", "A", "C", "A", "A"],
    ["B", "D", "D", "D", "D", "A", "C", "C", "C"],
    ["B", "B", "E", "D", "D", "A", "F", "F", "F"],
    ["G", "B", "E", "D", "D", "A", "F", "H", "H"],
    ["G", "B", "E", "I", "D", "A", "F", "F", "H"],
    ["G", "B", "E", "I", "D", "A", "F", "H", "H"],
    ["G", "G", "E", "I", "I", "I", "F", "F", "F"],
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

export default level275;
