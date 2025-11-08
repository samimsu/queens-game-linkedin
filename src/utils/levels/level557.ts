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

const level557 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "B"],
    ["A", "C", "C", "F", "F", "F", "G", "B"],
    ["A", "C", "F", "F", "H", "F", "G", "B"],
    ["A", "C", "C", "F", "H", "H", "G", "B"],
    ["A", "C", "H", "H", "H", "G", "G", "B"],
    ["A", "A", "A", "A", "B", "B", "B", "B"],
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
  isNew: true,
};

export default level557;
