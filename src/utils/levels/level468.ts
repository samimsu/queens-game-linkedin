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

const level468 = {
  size: 8,
  colorRegions: [
    ["A", "B", "C", "B", "D", "B", "E", "B"],
    ["B", "B", "C", "B", "D", "B", "E", "B"],
    ["B", "B", "B", "B", "D", "B", "E", "B"],
    ["B", "B", "B", "B", "B", "B", "E", "B"],
    ["F", "B", "B", "B", "G", "B", "B", "B"],
    ["F", "F", "F", "B", "G", "B", "B", "B"],
    ["F", "B", "B", "B", "G", "G", "H", "H"],
    ["F", "F", "B", "G", "G", "H", "H", "H"],
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

export default level468;
