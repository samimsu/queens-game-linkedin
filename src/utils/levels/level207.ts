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

const level207 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "C", "C", "C", "C", "C", "D"],
    ["A", "B", "C", "C", "C", "C", "C", "C", "C", "D"],
    ["A", "B", "C", "D", "D", "D", "D", "D", "D", "D"],
    ["A", "E", "E", "D", "D", "D", "D", "D", "D", "D"],
    ["A", "E", "F", "F", "F", "F", "F", "F", "F", "D"],
    ["A", "E", "F", "F", "F", "F", "G", "G", "F", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "G", "H", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "G", "H", "D"],
    ["A", "I", "J", "J", "G", "G", "G", "G", "H", "D"],
    ["A", "I", "I", "J", "J", "H", "H", "H", "H", "D"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightOrchid,
    D: halfBaked,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
    J: celadon,
  },
};

export default level207;
