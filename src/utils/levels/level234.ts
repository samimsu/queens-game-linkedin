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

const level234 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "B", "B", "B", "B", "B", "A", "B"],
    ["B", "B", "B", "C", "B", "D", "B", "B", "B"],
    ["B", "E", "C", "C", "F", "D", "D", "E", "B"],
    ["B", "E", "E", "F", "F", "F", "E", "E", "B"],
    ["B", "B", "E", "E", "E", "E", "E", "B", "B"],
    ["G", "G", "G", "E", "H", "E", "I", "I", "I"],
    ["G", "E", "E", "E", "H", "E", "E", "E", "I"],
    ["G", "E", "H", "H", "H", "E", "E", "E", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level234;
