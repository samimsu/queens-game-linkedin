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

const level341 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "A", "A", "A"],
    ["A", "C", "A", "B", "B", "B", "A", "C", "A"],
    ["A", "C", "A", "B", "B", "A", "A", "C", "A"],
    ["D", "C", "A", "A", "A", "A", "A", "C", "E"],
    ["D", "C", "C", "C", "C", "C", "C", "C", "E"],
    ["D", "F", "F", "G", "C", "E", "E", "E", "E"],
    ["D", "D", "F", "G", "C", "E", "E", "H", "H"],
    ["I", "I", "G", "G", "C", "E", "H", "H", "H"],
    ["I", "I", "I", "G", "C", "E", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: nomad,
    C: saharaSand,
    D: celadon,
    E: bittersweet,
    F: chardonnay,
    G: lightWisteria,
    H: lightOrchid,
    I: altoMain,
  },
};

export default level341;
