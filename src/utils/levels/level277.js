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

const level277 = {
  size: 10,
  colorRegions: [
    ["A", "B", "C", "C", "C", "D", "D", "D", "D", "D"],
    ["A", "B", "B", "C", "C", "D", "D", "D", "E", "E"],
    ["A", "B", "B", "C", "C", "F", "D", "D", "D", "E"],
    ["A", "A", "B", "C", "C", "F", "D", "D", "D", "E"],
    ["B", "A", "B", "C", "C", "F", "F", "D", "D", "E"],
    ["B", "B", "B", "C", "C", "G", "F", "D", "D", "E"],
    ["B", "B", "B", "B", "C", "G", "G", "E", "E", "E"],
    ["H", "C", "C", "C", "C", "I", "I", "E", "E", "E"],
    ["H", "C", "J", "C", "C", "I", "I", "E", "E", "I"],
    ["H", "H", "J", "J", "C", "I", "I", "I", "I", "I"],
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

export default level277;
