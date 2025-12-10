import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level588 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "C", "B", "C", "B", "B"],
    ["C", "C", "C", "B", "C", "C", "C"],
    ["D", "C", "C", "C", "C", "C", "E"],
    ["D", "F", "C", "C", "C", "E", "E"],
    ["D", "F", "G", "C", "E", "E", "E"],
    ["D", "F", "G", "G", "E", "E", "E"],
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

export default level588;
