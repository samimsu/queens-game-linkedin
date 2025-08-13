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

const level470 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "C", "C", "B", "D"],
    ["A", "A", "B", "B", "B", "B", "B", "D"],
    ["E", "E", "B", "F", "F", "B", "D", "D"],
    ["E", "B", "B", "B", "B", "B", "D", "D"],
    ["E", "B", "G", "G", "B", "D", "D", "D"],
    ["B", "B", "B", "B", "B", "D", "D", "D"],
    ["B", "H", "H", "B", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: nomad,
    B: altoMain,
    C: lightWisteria,
    D: bittersweet,
    E: saharaSand,
    F: chardonnay,
    G: anakiwa,
    H: celadon,
  },
  isNew: true,
};

export default level470;
