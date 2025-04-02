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

const level79 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "D", "D", "D", "B", "C"],
    ["B", "B", "B", "B", "B", "B", "D", "B", "C"],
    ["B", "E", "B", "B", "B", "B", "D", "B", "B"],
    ["B", "E", "B", "B", "B", "B", "F", "B", "B"],
    ["B", "E", "E", "E", "B", "F", "F", "B", "B"],
    ["B", "B", "B", "B", "G", "B", "B", "B", "H"],
    ["I", "B", "B", "G", "G", "B", "B", "B", "H"],
    ["I", "I", "B", "B", "B", "B", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: nomad,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level79;
