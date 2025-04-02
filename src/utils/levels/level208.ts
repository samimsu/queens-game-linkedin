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

const level208 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "A", "C", "C", "B", "D", "D", "C"],
    ["C", "C", "C", "C", "C", "B", "D", "C", "C"],
    ["C", "C", "E", "E", "E", "E", "D", "C", "C"],
    ["C", "C", "E", "F", "F", "F", "G", "C", "C"],
    ["C", "C", "H", "F", "G", "G", "G", "C", "C"],
    ["C", "C", "H", "F", "C", "C", "C", "C", "C"],
    ["C", "C", "H", "H", "C", "C", "C", "C", "I"],
    ["C", "C", "C", "C", "C", "C", "I", "I", "I"],
  ],
  regionColors: {
    A: celadon,
    B: lightWisteria,
    C: lightOrchid,
    D: chardonnay,
    E: anakiwa,
    F: bittersweet,
    G: saharaSand,
    H: altoMain,
    I: nomad,
  },
};

export default level208;
