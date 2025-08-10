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

const level466 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "B", "B", "B"],
    ["A", "A", "A", "A", "C", "B", "B", "B", "B"],
    ["A", "D", "A", "A", "C", "B", "B", "E", "F"],
    ["A", "D", "D", "D", "G", "E", "E", "E", "F"],
    ["A", "D", "H", "H", "I", "F", "F", "E", "F"],
    ["A", "A", "H", "H", "I", "F", "F", "F", "F"],
    ["A", "A", "H", "I", "I", "I", "F", "F", "F"],
    ["A", "A", "H", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightOrchid,
    C: lightWisteria,
    D: celadon,
    E: anakiwa,
    F: nomad,
    G: chardonnay,
    H: altoMain,
    I: saharaSand,
  },
};

export default level466;
