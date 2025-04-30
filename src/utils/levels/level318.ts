import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level318 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "A", "A", "A", "A", "A"],
    ["C", "C", "C", "B", "D", "D", "E", "A", "E"],
    ["F", "F", "C", "B", "B", "D", "E", "A", "E"],
    ["F", "C", "C", "B", "B", "D", "E", "E", "E"],
    ["F", "F", "C", "B", "B", "D", "G", "G", "E"],
    ["C", "C", "C", "H", "D", "D", "D", "G", "E"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "I"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: saharaSand,
    D: anakiwa,
    E: lightWisteria,
    F: altoMain,
    G: lightOrchid,
    H: nomad,
    I: celadon,
  },
};

export default level318;
