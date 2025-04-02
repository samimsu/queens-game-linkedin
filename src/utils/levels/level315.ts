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

const level315 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "E"],
    ["A", "A", "A", "B", "B", "B", "D", "D", "E"],
    ["A", "A", "B", "B", "B", "B", "B", "D", "E"],
    ["A", "B", "B", "F", "B", "G", "B", "B", "E"],
    ["A", "B", "F", "F", "B", "G", "G", "B", "E"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "E"],
    ["A", "B", "B", "H", "H", "H", "B", "B", "E"],
    ["A", "B", "B", "I", "H", "H", "B", "B", "E"],
    ["A", "B", "B", "I", "H", "H", "B", "B", "E"],
  ],
  regionColors: {
    A: bittersweet,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: lightOrchid,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
};

export default level315;
