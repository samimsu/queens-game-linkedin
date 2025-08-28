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

const level485 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "D", "B", "B", "B", "B", "E", "E", "F", "C"],
    ["A", "D", "B", "B", "B", "B", "B", "B", "F", "C"],
    ["A", "D", "B", "B", "G", "G", "G", "G", "F", "C"],
    ["A", "D", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "D", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "H", "H", "H", "H", "H", "H", "B", "C"],
    ["A", "B", "B", "B", "I", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: anakiwa,
    D: celadon,
    E: nomad,
    F: chardonnay,
    G: lightOrchid,
    H: saharaSand,
    I: bittersweet,
    J: halfBaked,
  },
  isNew: true,
};

export default level485;
