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

const level229 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "C", "B", "E", "C"],
    ["A", "A", "A", "D", "B", "B", "B", "E", "C"],
    ["F", "G", "G", "D", "D", "D", "H", "E", "C"],
    ["F", "G", "I", "I", "I", "D", "H", "E", "C"],
    ["F", "G", "I", "H", "D", "D", "H", "E", "C"],
    ["F", "G", "I", "H", "H", "H", "H", "E", "C"],
    ["E", "G", "E", "E", "E", "E", "E", "E", "C"],
    ["E", "E", "E", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level229;
