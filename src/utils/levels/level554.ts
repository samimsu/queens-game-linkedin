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

const level554 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["C", "C", "C", "A", "B", "B", "B", "B"],
    ["C", "C", "D", "D", "B", "B", "B", "B"],
    ["C", "C", "D", "D", "B", "B", "B", "B"],
    ["C", "E", "D", "D", "F", "B", "B", "B"],
    ["G", "E", "D", "E", "F", "B", "F", "B"],
    ["G", "E", "E", "E", "F", "F", "F", "B"],
    ["G", "G", "G", "E", "H", "H", "F", "B"],
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

export default level554;
