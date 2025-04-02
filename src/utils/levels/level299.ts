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

const level299 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "D", "B", "B", "E", "D", "B", "D", "F", "C"],
    ["A", "D", "D", "E", "E", "D", "D", "D", "F", "C"],
    ["A", "D", "D", "D", "E", "G", "D", "D", "F", "F"],
    ["A", "D", "A", "D", "D", "G", "G", "D", "D", "D"],
    ["A", "A", "A", "D", "D", "D", "G", "G", "D", "D"],
    ["A", "A", "D", "D", "H", "D", "D", "G", "G", "D"],
    ["A", "D", "D", "D", "H", "H", "D", "D", "D", "D"],
    ["A", "D", "A", "D", "I", "H", "H", "D", "J", "D"],
    ["A", "A", "A", "I", "I", "I", "J", "J", "J", "D"],
  ],
  regionColors: {
    A: halfBaked,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: celadon,
    J: lightWisteria,
  },
};

export default level299;
