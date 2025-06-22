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

const level417 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["A", "A", "A", "A", "B", "B", "C", "D", "D"],
    ["A", "E", "E", "C", "C", "C", "C", "C", "F"],
    ["G", "G", "E", "H", "C", "H", "I", "I", "F"],
    ["G", "G", "E", "H", "C", "H", "I", "I", "F"],
    ["G", "G", "E", "H", "H", "H", "I", "F", "F"],
    ["G", "E", "E", "E", "G", "F", "F", "F", "F"],
    ["G", "G", "G", "G", "G", "G", "F", "F", "F"],
    ["G", "G", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightOrchid,
    C: celadon,
    D: lightWisteria,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level417;
