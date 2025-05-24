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

const level389 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "E", "E", "E", "J", "C", "C", "C"],
    ["A", "H", "B", "E", "I", "E", "J", "J", "F", "C"],
    ["A", "H", "B", "E", "I", "I", "I", "J", "F", "C"],
    ["A", "H", "E", "E", "G", "G", "I", "J", "F", "C"],
    ["A", "H", "E", "H", "G", "I", "I", "F", "F", "C"],
    ["A", "H", "H", "H", "G", "F", "F", "F", "C", "C"],
    ["A", "A", "A", "A", "G", "G", "G", "G", "C", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "G", "C", "D"],
    ["D", "C", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
};

export default level389;
