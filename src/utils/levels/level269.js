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

const level269 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "C", "C", "C", "B"],
    ["A", "A", "B", "B", "C", "C", "B", "B"],
    ["A", "D", "D", "E", "E", "F", "F", "B"],
    ["A", "D", "D", "E", "E", "F", "F", "B"],
    ["G", "D", "H", "H", "E", "F", "B", "B"],
    ["G", "G", "H", "H", "B", "B", "B", "B"],
    ["G", "G", "H", "B", "B", "B", "B", "B"],
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

export default level269;
