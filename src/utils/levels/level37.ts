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

const level37 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "C", "D", "D", "D", "D", "B", "B"],
    ["A", "B", "B", "C", "C", "B", "D", "B", "B", "E"],
    ["A", "A", "B", "C", "B", "B", "B", "B", "E", "E"],
    ["A", "B", "B", "C", "B", "B", "B", "B", "B", "E"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "F", "E"],
    ["G", "G", "G", "G", "B", "B", "F", "F", "F", "F"],
    ["H", "G", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["H", "H", "B", "B", "B", "B", "I", "I", "I", "I"],
    ["H", "B", "B", "J", "B", "B", "B", "B", "I", "B"],
    ["H", "J", "J", "J", "J", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: chardonnay,
    B: altoMain,
    C: anakiwa,
    D: saharaSand,
    E: celadon,
    F: nomad,
    G: lightWisteria,
    H: bittersweet,
    I: lightOrchid,
    J: halfBaked,
  },
};

export default level37;
