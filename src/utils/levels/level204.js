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

const level204 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "C", "C", "A"],
    ["A", "A", "D", "D", "B", "C", "C", "A", "A"],
    ["E", "A", "A", "D", "B", "C", "A", "A", "F"],
    ["E", "E", "A", "A", "B", "A", "A", "F", "F"],
    ["G", "E", "E", "A", "A", "A", "H", "I", "F"],
    ["G", "G", "E", "E", "A", "H", "H", "I", "F"],
    ["G", "E", "E", "E", "E", "E", "I", "I", "I"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level204;
