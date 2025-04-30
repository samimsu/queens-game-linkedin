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

const level65 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D", "E", "D"],
    ["A", "A", "A", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D", "F", "D"],
    ["A", "A", "B", "B", "B", "C", "C", "D", "F", "D"],
    ["A", "G", "G", "G", "H", "I", "J", "I", "F", "F"],
    ["A", "G", "G", "H", "H", "I", "J", "I", "F", "F"],
    ["A", "G", "G", "G", "H", "I", "I", "I", "F", "F"],
    ["A", "A", "A", "G", "H", "H", "I", "F", "F", "F"],
    ["A", "G", "G", "G", "H", "H", "I", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
    I: saharaSand,
    J: nomad,
  },
};

export default level65;
