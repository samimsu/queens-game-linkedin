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

const level543 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "C", "A"],
    ["D", "A", "A", "A", "A", "A", "A", "C", "C"],
    ["D", "D", "A", "A", "A", "A", "E", "C", "C"],
    ["D", "D", "A", "F", "A", "A", "E", "E", "C"],
    ["G", "D", "F", "F", "E", "E", "E", "E", "H"],
    ["G", "G", "F", "F", "I", "I", "I", "E", "H"],
    ["G", "F", "F", "I", "I", "I", "E", "E", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: lightOrchid,
  },
  isNew: true,
};

export default level543;
