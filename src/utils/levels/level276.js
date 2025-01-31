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

const level276 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "A", "A", "A", "A", "C", "C", "A"],
    ["D", "B", "A", "A", "A", "A", "A", "C", "A"],
    ["D", "B", "E", "F", "F", "F", "G", "C", "A"],
    ["D", "B", "E", "E", "E", "G", "G", "C", "A"],
    ["D", "B", "E", "H", "H", "H", "G", "C", "A"],
    ["D", "B", "I", "I", "G", "G", "G", "C", "A"],
    ["B", "B", "B", "I", "G", "I", "C", "C", "C"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level276;
