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

const level10 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B", "C"],
    ["A", "D", "D", "D", "D", "D", "D", "D", "D", "C"],
    ["E", "E", "E", "D", "F", "F", "F", "F", "D", "C"],
    ["D", "D", "E", "E", "F", "D", "D", "G", "D", "C"],
    ["D", "D", "D", "D", "D", "D", "G", "G", "D", "C"],
    ["D", "D", "H", "H", "D", "G", "G", "D", "D", "I"],
    ["D", "D", "H", "D", "D", "J", "D", "D", "D", "I"],
    ["D", "D", "H", "D", "D", "J", "D", "D", "D", "I"],
    ["D", "D", "H", "J", "J", "J", "D", "D", "I", "I"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: saharaSand,
    D: halfBaked,
    E: nomad,
    F: anakiwa,
    G: altoMain,
    H: bittersweet,
    I: lightOrchid,
    J: celadon,
  },
};

export default level10;
