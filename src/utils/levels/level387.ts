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

const level387 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "A", "A", "C", "D", "E", "E", "A", "A"],
    ["A", "A", "C", "C", "D", "D", "E", "A", "A"],
    ["F", "F", "D", "G", "G", "D", "E", "A", "A"],
    ["F", "D", "D", "G", "D", "D", "D", "H", "H"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "H"],
    ["D", "D", "D", "D", "D", "D", "I", "D", "H"],
    ["D", "D", "D", "D", "D", "D", "I", "I", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: nomad,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: anakiwa,
    I: lightOrchid,
  },
  isNew: true,
};

export default level387;
