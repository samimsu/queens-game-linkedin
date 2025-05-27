import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level391 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C"],
    ["D", "D", "B", "B", "B", "B", "B", "C"],
    ["D", "B", "B", "B", "B", "B", "B", "C"],
    ["D", "B", "B", "B", "B", "B", "E", "E"],
    ["F", "F", "B", "B", "B", "B", "E", "E"],
    ["G", "F", "F", "B", "B", "B", "B", "E"],
    ["G", "G", "B", "B", "B", "B", "B", "H"],
    ["G", "B", "B", "B", "H", "H", "H", "H"],
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
  },
};

export default level391;
