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

const level192 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "C", "C", "C", "B", "B", "D"],
    ["A", "A", "C", "C", "E", "C", "C", "B", "D"],
    ["F", "A", "C", "C", "E", "C", "C", "D", "D"],
    ["F", "A", "A", "C", "E", "C", "D", "D", "D"],
    ["F", "F", "C", "C", "E", "C", "C", "D", "D"],
    ["G", "G", "C", "C", "E", "C", "C", "D", "D"],
    ["G", "H", "H", "C", "C", "C", "I", "D", "D"],
    ["G", "G", "H", "H", "I", "I", "I", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level192;
