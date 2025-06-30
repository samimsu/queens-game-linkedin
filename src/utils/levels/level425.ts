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

const level425 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "B", "B", "D"],
    ["A", "A", "B", "B", "C", "B", "B", "D", "D"],
    ["B", "B", "B", "C", "C", "C", "B", "B", "B"],
    ["B", "B", "C", "C", "E", "C", "C", "B", "B"],
    ["B", "B", "F", "C", "C", "C", "G", "B", "B"],
    ["B", "B", "F", "F", "C", "G", "G", "B", "B"],
    ["H", "B", "B", "F", "C", "G", "B", "B", "B"],
    ["H", "B", "B", "C", "C", "C", "B", "B", "I"],
    ["H", "H", "B", "B", "B", "B", "B", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
};

export default level425;
