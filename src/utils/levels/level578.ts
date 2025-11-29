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

const level578 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "C"],
    ["A", "A", "A", "B", "B", "D", "B", "B"],
    ["A", "A", "B", "B", "E", "D", "D", "B"],
    ["A", "B", "B", "E", "E", "D", "B", "B"],
    ["B", "B", "E", "E", "E", "B", "B", "F"],
    ["B", "G", "G", "E", "B", "B", "F", "F"],
    ["B", "B", "G", "B", "B", "F", "F", "F"],
    ["H", "B", "B", "B", "F", "F", "F", "F"],
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

export default level578;
