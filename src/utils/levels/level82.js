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

const level82 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["C", "A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["C", "D", "A", "A", "A", "E", "E", "E", "E", "B"],
    ["C", "D", "D", "A", "A", "E", "F", "F", "F", "F"],
    ["C", "D", "G", "H", "A", "E", "F", "F", "F", "F"],
    ["C", "D", "G", "G", "E", "E", "F", "F", "F", "F"],
    ["C", "D", "C", "G", "I", "E", "E", "E", "E", "F"],
    ["C", "C", "C", "G", "I", "I", "I", "F", "F", "F"],
    ["J", "J", "C", "G", "I", "G", "I", "I", "I", "I"],
    ["J", "J", "J", "G", "G", "G", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightOrchid,
    B: lightWisteria,
    C: bittersweet,
    D: celadon,
    E: anakiwa,
    F: nomad,
    G: chardonnay,
    H: halfBaked,
    I: saharaSand,
    J: altoMain,
  },
};

export default level82;
