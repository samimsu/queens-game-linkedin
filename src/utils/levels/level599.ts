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

const level599 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["A", "B", "B", "D", "B", "B", "C", "E", "E"],
    ["B", "B", "D", "D", "D", "B", "B", "E", "E"],
    ["B", "F", "F", "D", "D", "D", "B", "B", "E"],
    ["B", "B", "D", "D", "D", "D", "D", "B", "B"],
    ["G", "B", "B", "D", "D", "D", "D", "D", "B"],
    ["G", "G", "B", "B", "D", "D", "D", "B", "B"],
    ["G", "G", "G", "B", "B", "H", "B", "B", "I"],
    ["G", "G", "G", "G", "B", "B", "B", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level599;
