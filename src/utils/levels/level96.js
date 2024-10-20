import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightWisteria,
  malibu,
} from "../colors";

const level96 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "E", "E", "E", "B"],
    ["A", "C", "D", "D", "F", "F", "E", "B"],
    ["A", "G", "G", "G", "F", "F", "E", "B"],
    ["A", "A", "H", "G", "G", "G", "G", "B"],
    ["H", "A", "H", "H", "H", "B", "B", "B"],
    ["H", "H", "H", "H", "H", "H", "H", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: halfBaked,
    C: anakiwa,
    D: chardonnay,
    E: celadon,
    F: malibu,
    G: altoMain,
    H: bittersweet,
  },
};

export default level96;
