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

const level288 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "C", "C", "C", "D", "D", "B"],
    ["A", "E", "C", "F", "F", "F", "F", "D", "B"],
    ["A", "E", "E", "F", "G", "F", "F", "H", "B"],
    ["A", "E", "B", "B", "G", "G", "F", "H", "B"],
    ["A", "E", "B", "B", "B", "I", "F", "H", "B"],
    ["B", "B", "B", "B", "B", "I", "H", "H", "B"],
    ["B", "B", "B", "I", "I", "I", "I", "H", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: lightWisteria,
    G: saharaSand,
    H: lightOrchid,
    I: altoMain,
  },
};

export default level288;
