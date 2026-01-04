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

const level614 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "C", "C", "C", "D", "D"],
    ["B", "B", "E", "E", "C", "C", "C", "D"],
    ["B", "B", "E", "F", "F", "C", "D", "D"],
    ["B", "G", "G", "F", "G", "G", "D", "D"],
    ["G", "G", "G", "G", "G", "H", "H", "D"],
    ["G", "G", "G", "D", "G", "H", "D", "D"],
    ["G", "G", "G", "D", "D", "D", "D", "D"],
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

export default level614;
