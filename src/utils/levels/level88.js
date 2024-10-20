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

const level88 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["E", "A", "A", "A", "B", "B", "C", "C", "D", "D"],
    ["E", "E", "A", "B", "B", "B", "B", "D", "D", "F"],
    ["A", "E", "A", "B", "G", "G", "G", "D", "F", "F"],
    ["A", "A", "A", "B", "B", "B", "G", "D", "F", "D"],
    ["H", "A", "A", "B", "B", "B", "B", "D", "D", "D"],
    ["H", "A", "A", "I", "I", "I", "B", "D", "J", "J"],
    ["H", "A", "A", "B", "I", "B", "B", "D", "J", "D"],
    ["H", "A", "A", "B", "B", "B", "B", "D", "J", "D"],
    ["A", "A", "A", "A", "B", "B", "B", "D", "D", "D"],
  ],
  regionColors: {
    A: celadon,
    B: halfBaked,
    C: altoMain,
    D: anakiwa,
    E: nomad,
    F: lightWisteria,
    G: saharaSand,
    H: lightOrchid,
    I: bittersweet,
    J: chardonnay,
  },
};

export default level88;
