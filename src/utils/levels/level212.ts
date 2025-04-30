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

const level212 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "C", "C", "E"],
    ["A", "C", "F", "C", "C", "D", "D", "C", "E"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "E"],
    ["A", "C", "C", "G", "G", "C", "H", "C", "E"],
    ["A", "C", "C", "G", "G", "C", "C", "C", "E"],
    ["A", "A", "C", "C", "C", "C", "C", "E", "E"],
    ["A", "A", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level212;
