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

const level513 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "B", "A", "C", "C", "A", "D", "E"],
    ["A", "B", "B", "B", "A", "A", "C", "D", "D", "E"],
    ["A", "A", "A", "F", "F", "A", "A", "D", "E", "E"],
    ["A", "G", "A", "A", "F", "A", "A", "D", "E", "E"],
    ["A", "G", "G", "A", "F", "A", "H", "H", "E", "E"],
    ["A", "A", "G", "A", "I", "A", "H", "E", "E", "E"],
    ["A", "A", "I", "I", "I", "J", "J", "J", "J", "E"],
    ["A", "A", "A", "A", "I", "E", "E", "E", "J", "E"],
    ["A", "A", "A", "A", "I", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: anakiwa,
    B: nomad,
    C: bittersweet,
    D: altoMain,
    E: saharaSand,
    F: lightOrchid,
    G: chardonnay,
    H: celadon,
    I: lightWisteria,
    J: halfBaked,
  },
  isNew: true,
};

export default level513;
