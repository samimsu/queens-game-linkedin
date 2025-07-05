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

const level431 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "B", "B", "A"],
    ["A", "A", "B", "B", "C", "B", "B", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "A", "A", "A"],
    ["D", "A", "A", "A", "A", "A", "A", "A", "E"],
    ["D", "D", "A", "A", "F", "A", "A", "E", "E"],
    ["D", "G", "G", "A", "A", "A", "A", "A", "E"],
    ["G", "G", "G", "H", "H", "H", "A", "A", "A"],
    ["G", "G", "H", "H", "I", "H", "H", "A", "A"],
    ["G", "H", "H", "I", "I", "I", "H", "H", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: bittersweet,
    E: lightOrchid,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
  isNew: true,
};

export default level431;
