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

const level594 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "C", "C", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "D", "D", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "E", "B"],
    ["B", "F", "B", "B", "B", "B", "E", "B"],
    ["B", "F", "B", "B", "G", "G", "B", "B"],
    ["B", "B", "H", "H", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
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

export default level594;
