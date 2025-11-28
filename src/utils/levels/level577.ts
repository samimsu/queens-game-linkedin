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

const level577 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "D", "D", "B", "B", "B"],
    ["B", "E", "E", "D", "D", "D", "D", "D", "B"],
    ["B", "F", "E", "D", "D", "D", "D", "G", "B"],
    ["B", "F", "E", "H", "H", "H", "D", "G", "B"],
    ["B", "F", "E", "H", "I", "H", "D", "G", "B"],
    ["B", "F", "E", "H", "I", "H", "D", "G", "B"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: bittersweet,
    D: celadon,
    E: altoMain,
    F: anakiwa,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
  isNew: true,
};

export default level577;
