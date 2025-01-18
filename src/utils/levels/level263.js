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

const level263 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "A", "A", "C", "D", "A", "A", "A", "B"],
    ["B", "B", "C", "C", "C", "D", "A", "A", "B", "B"],
    ["B", "B", "B", "B", "D", "D", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "E", "E", "B"],
    ["B", "B", "B", "B", "F", "F", "B", "B", "B", "B"],
    ["G", "G", "B", "B", "H", "F", "B", "B", "I", "I"],
    ["G", "G", "G", "H", "H", "F", "F", "F", "F", "I"],
    ["G", "H", "H", "H", "J", "J", "F", "F", "I", "I"],
    ["G", "G", "H", "J", "J", "J", "F", "I", "I", "I"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightOrchid,
    D: altoMain,
    E: nomad,
    F: halfBaked,
    G: lightWisteria,
    H: celadon,
    I: bittersweet,
    J: saharaSand,
  },
};

export default level263;
