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

const level354 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "C", "C", "D", "D", "D", "A"],
    ["B", "C", "E", "E", "F", "F", "D", "D", "D", "A"],
    ["B", "C", "E", "E", "F", "F", "D", "D", "D", "A"],
    ["B", "C", "E", "G", "G", "F", "D", "D", "D", "A"],
    ["B", "C", "H", "G", "G", "G", "I", "I", "C", "A"],
    ["B", "C", "H", "H", "J", "J", "I", "I", "C", "A"],
    ["B", "C", "H", "H", "J", "J", "J", "I", "C", "A"],
    ["B", "C", "C", "C", "C", "C", "C", "C", "C", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: anakiwa,
    B: bittersweet,
    C: lightWisteria,
    D: celadon,
    E: lightOrchid,
    F: chardonnay,
    G: saharaSand,
    H: halfBaked,
    I: altoMain,
    J: nomad,
  },
};

export default level354;
