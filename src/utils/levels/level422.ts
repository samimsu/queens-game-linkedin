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

const level422 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D", "E", "F"],
    ["A", "B", "B", "C", "D", "D", "E", "F"],
    ["A", "A", "B", "C", "C", "D", "E", "F"],
    ["A", "B", "B", "G", "C", "D", "E", "F"],
    ["A", "A", "B", "C", "C", "D", "E", "F"],
    ["H", "H", "H", "H", "E", "E", "E", "F"],
    ["F", "F", "H", "H", "H", "H", "H", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F"],
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

export default level422;
