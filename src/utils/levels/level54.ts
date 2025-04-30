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

const level54 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "C", "C", "C", "C", "C", "D"],
    ["A", "B", "E", "E", "E", "E", "F", "G", "C", "D"],
    ["A", "B", "E", "H", "H", "H", "F", "G", "C", "D"],
    ["A", "B", "E", "I", "I", "H", "F", "G", "C", "D"],
    ["A", "B", "E", "I", "J", "H", "F", "G", "C", "D"],
    ["A", "B", "J", "J", "J", "H", "F", "G", "C", "D"],
    ["A", "F", "F", "F", "F", "F", "F", "G", "C", "D"],
    ["A", "G", "G", "G", "G", "G", "G", "G", "C", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: chardonnay,
    B: celadon,
    C: anakiwa,
    D: lightWisteria,
    E: halfBaked,
    F: lightOrchid,
    G: altoMain,
    H: bittersweet,
    I: saharaSand,
    J: nomad,
  },
};

export default level54;
