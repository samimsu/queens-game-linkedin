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

const level411 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "C", "A"],
    ["B", "B", "D", "B", "E", "E", "C", "C", "C"],
    ["B", "B", "D", "D", "E", "E", "F", "C", "C"],
    ["B", "B", "D", "G", "G", "G", "F", "C", "C"],
    ["B", "B", "H", "G", "G", "F", "F", "C", "C"],
    ["B", "B", "H", "H", "I", "I", "I", "I", "C"],
    ["B", "C", "C", "H", "C", "C", "C", "C", "C"],
    ["B", "C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: bittersweet,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level411;
