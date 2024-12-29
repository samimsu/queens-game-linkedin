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

const level243 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "C", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "C", "E", "E", "C", "C"],
    ["A", "F", "F", "D", "B", "C", "C", "E", "E", "C"],
    ["A", "A", "F", "F", "B", "C", "C", "E", "C", "C"],
    ["G", "G", "G", "F", "B", "C", "C", "E", "H", "C"],
    ["B", "B", "G", "B", "B", "C", "C", "E", "H", "C"],
    ["B", "B", "G", "B", "B", "C", "C", "I", "H", "H"],
    ["B", "B", "B", "B", "B", "C", "C", "I", "I", "H"],
    ["B", "B", "B", "B", "B", "C", "J", "J", "I", "I"],
    ["B", "B", "B", "B", "B", "C", "C", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: halfBaked,
    C: anakiwa,
    D: nomad,
    E: saharaSand,
    F: chardonnay,
    G: bittersweet,
    H: lightOrchid,
    I: altoMain,
    J: celadon,
  },
};

export default level243;
