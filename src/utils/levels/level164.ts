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

const level164 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "B", "D", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "E", "E", "E", "C", "C", "C"],
    ["A", "A", "A", "E", "C", "E", "C", "C", "C"],
    ["A", "F", "F", "C", "C", "C", "C", "C", "C"],
    ["G", "G", "F", "C", "H", "H", "H", "C", "C"],
    ["G", "F", "F", "C", "H", "I", "H", "I", "C"],
    ["G", "G", "C", "C", "C", "I", "I", "I", "C"],
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

export default level164;
