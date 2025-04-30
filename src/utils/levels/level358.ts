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

const level358 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "D", "B", "B", "C"],
    ["A", "B", "B", "E", "B", "D", "B", "F", "C"],
    ["A", "G", "B", "E", "B", "D", "F", "F", "C"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "C"],
    ["A", "H", "I", "I", "H", "C", "F", "F", "C"],
    ["C", "H", "I", "I", "H", "C", "C", "F", "C"],
    ["C", "H", "H", "H", "H", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightWisteria,
    H: nomad,
    I: lightOrchid,
  },
};

export default level358;
