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

const level499 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "A", "D", "D", "D", "B", "B"],
    ["A", "A", "A", "A", "D", "E", "D", "B", "B"],
    ["F", "F", "F", "B", "D", "E", "D", "B", "B"],
    ["G", "G", "F", "B", "D", "D", "D", "B", "B"],
    ["G", "G", "F", "B", "B", "B", "B", "B", "B"],
    ["F", "F", "F", "B", "B", "H", "H", "H", "H"],
    ["B", "B", "B", "B", "B", "H", "I", "I", "H"],
    ["B", "B", "B", "B", "B", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: altoMain,
    C: lightWisteria,
    D: celadon,
    E: saharaSand,
    F: chardonnay,
    G: lightOrchid,
    H: bittersweet,
    I: nomad,
  },
  isNew: true,
};

export default level499;
