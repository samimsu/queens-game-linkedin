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

const level481 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "A", "B", "B", "D", "D", "C"],
    ["A", "D", "D", "D", "B", "D", "D", "D", "C"],
    ["A", "E", "D", "D", "D", "D", "D", "C", "C"],
    ["F", "E", "E", "D", "D", "D", "C", "C", "C"],
    ["F", "F", "D", "D", "D", "D", "D", "C", "C"],
    ["F", "D", "D", "D", "G", "D", "D", "D", "C"],
    ["H", "D", "D", "G", "G", "G", "D", "D", "I"],
    ["H", "H", "H", "G", "G", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
  isNew: true,
};

export default level481;
