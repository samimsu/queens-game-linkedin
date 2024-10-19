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

const level166 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "D", "B", "B", "C", "E"],
    ["A", "D", "B", "B", "C", "C", "E"],
    ["B", "B", "B", "C", "C", "F", "G"],
    ["B", "C", "C", "C", "C", "F", "G"],
    ["C", "C", "C", "F", "F", "F", "G"],
    ["C", "F", "F", "F", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level166;
