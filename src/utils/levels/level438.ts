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

const level438 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "A", "A", "A"],
    ["A", "A", "B", "C", "C", "B", "B", "B", "A"],
    ["A", "D", "D", "D", "C", "E", "E", "B", "A"],
    ["A", "D", "D", "D", "C", "E", "E", "F", "A"],
    ["A", "D", "D", "D", "C", "C", "E", "F", "A"],
    ["G", "D", "D", "D", "H", "E", "E", "F", "A"],
    ["G", "I", "I", "I", "H", "E", "F", "F", "F"],
    ["I", "I", "E", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
  isNew: true,
};

export default level438;
