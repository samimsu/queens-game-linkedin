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

const level219 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "C", "C", "A", "A", "A", "B"],
    ["D", "A", "A", "A", "A", "A", "A", "B"],
    ["D", "A", "A", "E", "E", "A", "A", "A"],
    ["D", "D", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "F", "F", "A"],
    ["G", "A", "A", "A", "A", "A", "A", "A"],
    ["G", "G", "G", "A", "A", "A", "H", "H"],
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightWisteria,
    H: nomad,
  },
};

export default level219;
