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

const level225 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "B", "B"],
    ["C", "C", "C", "C", "C", "B", "B", "B"],
    ["D", "D", "E", "E", "E", "B", "B", "B"],
    ["D", "F", "G", "E", "E", "B", "B", "H"],
    ["D", "F", "G", "G", "E", "B", "H", "H"],
    ["E", "F", "F", "E", "E", "B", "H", "H"],
    ["E", "E", "E", "E", "E", "B", "B", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
};

export default level225;
