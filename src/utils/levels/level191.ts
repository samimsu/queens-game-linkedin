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

const level191 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "B", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "B", "A", "C", "A"],
    ["A", "A", "D", "B", "B", "B", "B", "C", "C", "E"],
    ["A", "D", "D", "B", "B", "B", "B", "C", "E", "E"],
    ["A", "F", "F", "F", "F", "F", "F", "F", "G", "F"],
    ["A", "F", "F", "H", "H", "H", "F", "G", "G", "F"],
    ["A", "F", "F", "F", "H", "F", "F", "F", "F", "F"],
    ["A", "F", "I", "I", "I", "J", "J", "J", "F", "J"],
    ["A", "A", "I", "I", "I", "I", "I", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: saharaSand,
    H: nomad,
    I: halfBaked,
    J: bittersweet,
  },
};

export default level191;
