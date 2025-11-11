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

const level560 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["C", "A", "A", "D", "B", "B", "E", "B"],
    ["C", "C", "A", "D", "D", "B", "E", "E"],
    ["C", "C", "A", "D", "D", "B", "E", "E"],
    ["C", "C", "F", "D", "D", "B", "E", "E"],
    ["C", "C", "F", "D", "D", "F", "E", "E"],
    ["G", "C", "F", "F", "D", "F", "F", "E"],
    ["G", "H", "H", "F", "F", "F", "F", "F"],
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

export default level560;
