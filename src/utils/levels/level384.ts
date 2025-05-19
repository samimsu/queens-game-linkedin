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

const level384 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B"],
    ["C", "C", "C", "C", "C", "C", "C", "B"],
    ["D", "D", "E", "E", "E", "E", "C", "F"],
    ["D", "C", "C", "C", "C", "E", "C", "F"],
    ["D", "C", "G", "C", "C", "E", "C", "F"],
    ["D", "C", "G", "E", "E", "E", "C", "F"],
    ["H", "C", "C", "C", "C", "C", "C", "F"],
    ["H", "H", "H", "H", "H", "H", "F", "F"],
  ],
  regionColors: {
    A: celadon,
    B: altoMain,
    C: lightWisteria,
    D: bittersweet,
    E: nomad,
    F: anakiwa,
    G: saharaSand,
    H: chardonnay,
  },
  isNew: true,
};

export default level384;
