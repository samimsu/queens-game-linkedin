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

const level271 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "B", "E", "E", "D", "D", "C"],
    ["A", "A", "D", "D", "B", "E", "D", "D", "C", "C"],
    ["F", "A", "F", "D", "G", "E", "D", "C", "C", "C"],
    ["F", "F", "F", "D", "G", "E", "D", "C", "H", "C"],
    ["F", "F", "I", "D", "D", "D", "D", "C", "H", "C"],
    ["F", "F", "I", "D", "D", "D", "D", "C", "H", "H"],
    ["J", "F", "I", "D", "D", "D", "D", "I", "I", "H"],
    ["J", "F", "I", "I", "D", "D", "I", "I", "H", "H"],
    ["J", "J", "I", "I", "I", "I", "I", "I", "I", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: lightOrchid,
    J: nomad,
  },
};

export default level271;
