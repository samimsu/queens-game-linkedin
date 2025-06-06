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

const level402 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "C"],
    ["D", "A", "E", "E", "E", "E", "B", "B", "C"],
    ["A", "A", "A", "E", "E", "E", "E", "C", "C"],
    ["F", "F", "F", "G", "G", "E", "E", "C", "C"],
    ["F", "H", "F", "F", "G", "E", "E", "E", "C"],
    ["F", "H", "F", "G", "G", "G", "E", "C", "C"],
    ["F", "H", "H", "H", "H", "H", "I", "I", "C"],
    ["F", "H", "H", "H", "H", "H", "H", "I", "C"],
    ["H", "H", "H", "H", "H", "H", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightOrchid,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
  isNew: true,
};

export default level402;
