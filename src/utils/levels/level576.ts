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

const level576 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "C", "B", "C", "B", "B", "B"],
    ["A", "A", "C", "C", "C", "C", "C", "B", "B"],
    ["D", "D", "C", "E", "E", "E", "C", "B", "B"],
    ["D", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["D", "F", "G", "G", "G", "G", "G", "C", "B"],
    ["F", "F", "C", "C", "C", "C", "C", "C", "C"],
    ["F", "H", "I", "I", "I", "I", "I", "I", "C"],
    ["F", "H", "H", "H", "I", "I", "I", "I", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level576;
