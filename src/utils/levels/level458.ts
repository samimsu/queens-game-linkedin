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

const level458 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "D", "D", "D", "B", "B", "B"],
    ["A", "A", "A", "D", "E", "D", "F", "F", "F"],
    ["E", "E", "E", "D", "E", "D", "F", "G", "G"],
    ["E", "H", "E", "D", "E", "D", "F", "F", "F"],
    ["H", "H", "E", "D", "E", "D", "F", "I", "I"],
    ["H", "H", "E", "E", "E", "E", "F", "F", "F"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightOrchid,
    C: lightWisteria,
    D: bittersweet,
    E: altoMain,
    F: celadon,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level458;
