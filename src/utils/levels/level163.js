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

const level163 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "B", "B", "B", "B", "B", "B", "B"],
    ["D", "C", "C", "C", "B", "B", "B", "B", "B", "B"],
    ["D", "C", "C", "E", "E", "B", "B", "B", "B", "B"],
    ["D", "C", "C", "E", "E", "F", "F", "B", "B", "B"],
    ["D", "C", "C", "E", "G", "F", "F", "F", "H", "B"],
    ["D", "D", "I", "I", "G", "G", "G", "F", "H", "B"],
    ["D", "D", "I", "I", "G", "J", "J", "F", "H", "B"],
    ["D", "D", "I", "I", "I", "J", "J", "J", "H", "H"],
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

export default level163;
