import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level608 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B"],
    ["C", "A", "B", "D", "D", "D", "B"],
    ["A", "A", "B", "D", "D", "E", "E"],
    ["A", "D", "D", "D", "D", "E", "F"],
    ["A", "A", "G", "G", "G", "E", "E"],
    ["G", "G", "G", "G", "G", "G", "E"],
    ["G", "G", "G", "G", "G", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
};

export default level608;
