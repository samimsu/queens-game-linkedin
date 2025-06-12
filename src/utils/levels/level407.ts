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

const level407 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "B", "B", "B", "B"],
    ["A", "C", "E", "E", "D", "F", "F", "F", "B"],
    ["A", "C", "D", "D", "D", "G", "G", "F", "B"],
    ["A", "C", "D", "H", "H", "F", "F", "F", "B"],
    ["A", "A", "D", "D", "D", "I", "I", "F", "A"],
    ["A", "A", "A", "A", "A", "F", "F", "F", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
};

export default level407;
