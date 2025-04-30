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

const level25 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C", "C"],
    ["D", "E", "F", "F", "B", "G", "C", "H", "H", "H"],
    ["D", "E", "F", "F", "B", "G", "C", "C", "G", "H"],
    ["D", "E", "F", "F", "B", "G", "G", "G", "G", "H"],
    ["D", "D", "F", "F", "B", "D", "H", "H", "G", "H"],
    ["D", "D", "F", "F", "B", "D", "I", "H", "H", "H"],
    ["D", "D", "F", "F", "D", "D", "I", "I", "H", "I"],
    ["D", "D", "D", "D", "D", "I", "I", "I", "H", "I"],
    ["J", "J", "J", "D", "D", "I", "I", "I", "H", "I"],
    ["J", "J", "J", "D", "D", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: nomad,
    B: anakiwa,
    C: lightOrchid,
    D: altoMain,
    E: celadon,
    F: halfBaked,
    G: bittersweet,
    H: chardonnay,
    I: saharaSand,
    J: lightWisteria,
  },
};

export default level25;
