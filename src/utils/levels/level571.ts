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

const level571 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "D", "D", "D", "D", "D", "B", "C"],
    ["A", "B", "E", "E", "E", "E", "D", "B", "C"],
    ["A", "B", "B", "F", "F", "E", "B", "B", "C"],
    ["A", "A", "B", "B", "F", "B", "B", "C", "C"],
    ["G", "G", "G", "B", "F", "B", "C", "C", "C"],
    ["H", "G", "B", "B", "I", "B", "B", "C", "C"],
    ["H", "H", "B", "I", "I", "I", "B", "C", "C"],
    ["H", "H", "B", "B", "B", "B", "B", "C", "C"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level571;
