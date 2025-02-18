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

const level294 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["B", "D", "D", "D", "B", "B", "B", "E", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "E", "B"],
    ["B", "F", "B", "B", "B", "B", "B", "E", "B"],
    ["B", "F", "B", "B", "B", "B", "B", "B", "B"],
    ["G", "F", "B", "B", "B", "H", "H", "H", "B"],
    ["G", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["G", "B", "B", "B", "B", "B", "I", "I", "I"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level294;
