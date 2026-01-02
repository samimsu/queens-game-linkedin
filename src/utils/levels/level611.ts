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

const level611 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "B", "E", "E", "F", "F", "F", "F", "C"],
    ["A", "B", "B", "B", "F", "G", "G", "G", "C"],
    ["A", "A", "A", "A", "F", "G", "H", "H", "C"],
    ["A", "A", "A", "A", "F", "G", "G", "G", "C"],
    ["A", "A", "A", "A", "F", "G", "I", "G", "C"],
    ["F", "F", "F", "F", "F", "G", "G", "G", "C"],
  ],
  regionColors: {
    A: lightOrchid,
    B: lightWisteria,
    C: bittersweet,
    D: nomad,
    E: altoMain,
    F: saharaSand,
    G: chardonnay,
    H: anakiwa,
    I: celadon,
  },
};

export default level611;
