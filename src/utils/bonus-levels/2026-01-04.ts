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

const level = {
  path: "/bonus-level/2026-01-04",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "C", "C", "A", "A", "A", "A", "B", "B"],
    ["C", "C", "C", "C", "C", "A", "A", "B", "B"],
    ["D", "D", "D", "D", "D", "D", "E", "E", "E"],
    ["D", "D", "D", "D", "D", "E", "E", "F", "E"],
    ["D", "D", "D", "D", "E", "E", "F", "F", "F"],
    ["G", "G", "G", "G", "G", "H", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "G", "G", "I", "H"],
    ["G", "G", "G", "G", "G", "G", "G", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: anakiwa,
  },
  isNew: true,
};

export default level;
