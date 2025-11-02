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

const level550 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "C"],
    ["D", "D", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "D", "B", "B", "B", "C", "C", "C", "C"],
    ["D", "B", "B", "B", "B", "E", "E", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "E", "E", "C"],
    ["B", "B", "F", "F", "B", "B", "B", "E", "E"],
    ["F", "F", "F", "G", "G", "B", "B", "B", "E"],
    ["H", "H", "H", "H", "G", "I", "B", "B", "B"],
    ["H", "H", "H", "H", "G", "I", "I", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: nomad,
    G: saharaSand,
    H: bittersweet,
    I: celadon,
  },
};

export default level550;
