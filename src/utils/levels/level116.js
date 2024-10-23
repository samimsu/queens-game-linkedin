import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level116 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["C", "D", "D", "D", "E", "A", "A", "A", "B"],
    ["C", "C", "C", "D", "E", "A", "F", "F", "B"],
    ["G", "D", "D", "D", "E", "H", "F", "H", "B"],
    ["G", "D", "I", "I", "I", "H", "F", "H", "B"],
    ["G", "D", "D", "D", "I", "H", "H", "H", "B"],
    ["G", "G", "G", "G", "I", "B", "B", "H", "B"],
    ["G", "G", "G", "G", "G", "B", "B", "H", "B"],
    ["G", "G", "G", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: bittersweet,
    C: chardonnay,
    D: lightWisteria,
    E: nomad,
    F: celadon,
    G: anakiwa,
    H: saharaSand,
    I: altoMain,
  },
};

export default level116;
