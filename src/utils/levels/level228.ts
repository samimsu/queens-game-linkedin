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

const level228 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "D", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "B", "E", "E"],
    ["A", "A", "C", "D", "B", "B", "B", "E", "E"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "E"],
    ["A", "F", "A", "A", "G", "H", "B", "B", "E"],
    ["F", "F", "F", "G", "G", "H", "H", "H", "E"],
    ["I", "F", "I", "E", "G", "H", "E", "E", "E"],
    ["I", "I", "I", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
};

export default level228;
