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

const level290 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "C", "C", "A", "D"],
    ["A", "B", "B", "E", "B", "E", "C", "A", "D"],
    ["A", "B", "E", "E", "E", "E", "E", "D", "D"],
    ["B", "B", "E", "E", "E", "E", "E", "D", "D"],
    ["F", "F", "G", "E", "E", "E", "H", "I", "D"],
    ["F", "F", "G", "G", "E", "H", "H", "I", "D"],
    ["I", "F", "F", "I", "I", "I", "I", "I", "D"],
    ["I", "I", "I", "I", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: nomad,
    G: saharaSand,
    H: altoMain,
    I: lightWisteria,
  },
};

export default level290;
