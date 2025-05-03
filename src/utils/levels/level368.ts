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

const level368 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "A", "A", "B", "A", "C", "A", "A", "D"],
    ["A", "A", "A", "A", "B", "A", "C", "A", "A", "A"],
    ["A", "A", "E", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "E", "E", "E", "A", "A", "F", "A", "A"],
    ["A", "G", "E", "H", "H", "H", "A", "F", "F", "A"],
    ["A", "G", "A", "A", "H", "A", "A", "I", "F", "A"],
    ["G", "G", "G", "A", "H", "A", "I", "I", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "I", "J", "J", "A"],
    ["A", "A", "A", "A", "A", "A", "J", "J", "A", "A"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: saharaSand,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: anakiwa,
    H: nomad,
    I: lightWisteria,
    J: halfBaked,
  },
};

export default level368;
