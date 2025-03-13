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

const level317 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "D", "C"],
    ["A", "A", "A", "B", "B", "B", "D", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "B", "C", "E"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "E"],
    ["F", "B", "B", "G", "G", "G", "B", "B", "E"],
    ["F", "B", "H", "H", "G", "I", "I", "B", "E"],
    ["F", "F", "F", "H", "G", "I", "E", "E", "E"],
    ["F", "E", "E", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightOrchid,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: chardonnay,
  },
};

export default level317;
