import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level1 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "C", "C", "C", "D", "C"],
    ["B", "A", "E", "E", "B", "F", "F", "D", "D", "C"],
    ["B", "B", "E", "E", "B", "F", "F", "D", "C", "C"],
    ["B", "B", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["B", "G", "G", "B", "B", "C", "C", "C", "C", "C"],
    ["H", "H", "G", "G", "B", "C", "C", "I", "I", "C"],
    ["H", "H", "B", "B", "B", "J", "J", "I", "I", "C"],
    ["B", "B", "B", "B", "J", "J", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: altoMain,
    D: celadon,
    E: anakiwa,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: lightWisteria,
    J: nomad,
  },
};

export default level1;
