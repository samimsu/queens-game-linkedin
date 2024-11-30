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

const level214 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["B", "D", "D", "D", "D", "D", "D", "D", "D", "C"],
    ["B", "D", "E", "E", "E", "E", "E", "E", "D", "C"],
    ["F", "D", "E", "G", "G", "G", "G", "E", "D", "C"],
    ["F", "D", "E", "H", "H", "H", "H", "E", "D", "C"],
    ["D", "D", "E", "H", "I", "I", "H", "E", "D", "D"],
    ["D", "D", "E", "H", "J", "I", "H", "E", "D", "D"],
    ["E", "E", "E", "H", "I", "I", "H", "E", "E", "E"],
    ["H", "H", "H", "H", "I", "I", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: halfBaked,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: celadon,
    J: altoMain,
  },
};

export default level214;
