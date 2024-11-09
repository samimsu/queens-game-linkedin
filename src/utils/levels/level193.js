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

const level193 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "B", "B", "B", "A"],
    ["A", "C", "C", "B", "A", "B", "D", "D", "A"],
    ["A", "E", "C", "B", "A", "B", "D", "A", "A"],
    ["F", "E", "E", "B", "B", "B", "G", "G", "H"],
    ["F", "E", "F", "F", "B", "H", "G", "H", "H"],
    ["F", "F", "F", "F", "B", "H", "H", "H", "H"],
    ["I", "F", "H", "B", "B", "B", "H", "H", "H"],
    ["I", "F", "H", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: nomad,
    G: lightOrchid,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level193;
